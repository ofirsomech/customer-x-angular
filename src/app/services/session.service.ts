import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionPrefix = 'X_';

  constructor() {}

  setItem(key: string, value: any, expirationMinutes: number = 5): void {
    const now = new Date();
    const expirationTime = now.getTime() + expirationMinutes * 60 * 1000; // expiration time in milliseconds
    const itemWithExpiration = {
      value,
      expirationTime,
    };
    sessionStorage.setItem(this.sessionPrefix + key, JSON.stringify(itemWithExpiration));
  }

  getItem(key: string): any {
    const item = sessionStorage.getItem(this.sessionPrefix + key);
    if (item) {
      const parsedItem = JSON.parse(item);
      const now = new Date();
      if (now.getTime() < parsedItem.expirationTime) {
        return parsedItem.value;
      } else {
        sessionStorage.removeItem(this.sessionPrefix + key);
      }
    }
    return null;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(this.sessionPrefix + key);
  }
}
