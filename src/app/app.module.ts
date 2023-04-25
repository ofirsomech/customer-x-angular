import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { CustomerContainerComponent } from './containers/customer-container/customer-container.component';
import { SubscriptionContainerComponent } from './containers/subscription-container/subscription-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    IdentificationComponent,
    CustomerContainerComponent,
    SubscriptionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
