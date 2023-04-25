import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get item from session storage', () => {
    const key = 'testKey';
    const value = { test: 'testValue' };
    const expirationMinutes = 1;
    service.setItem(key, value, expirationMinutes);

    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toEqual(value);
  });
  it('should remove expired item from session storage', () => {
    const key = 'testKey';
    const value = { test: 'testValue' };
    const expirationMinutes = 1;
    service.setItem(key, value, expirationMinutes);

    // Wait for expiration
    setTimeout(() => {
      const retrievedValue = service.getItem(key);
      expect(retrievedValue).toBeNull();
    }, expirationMinutes * 60 * 1000 + 1000);
  });

  it('should remove item from session storage', () => {
    const key = 'testKey';
    const value = { test: 'testValue' };
    const expirationMinutes = 1;
    service.setItem(key, value, expirationMinutes);

    service.removeItem(key);

    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toBeNull();
  });
});
