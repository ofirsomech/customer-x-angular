import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdentificationComponent} from "./components/identification/identification.component";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/identification', pathMatch: 'full' },
  { path: 'identification', component: IdentificationComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
