import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IdentificationComponent } from './components/identification/identification.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddressComponent } from './components/customer-details/cards/address-card/address.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NameCardComponent } from './components/customer-details/cards/name-card/name-card.component';
import { TableCardComponent } from './components/customer-details/cards/table-card/table-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    CustomerDetailsComponent,
    AddressComponent,
    NameCardComponent,
    TableCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
