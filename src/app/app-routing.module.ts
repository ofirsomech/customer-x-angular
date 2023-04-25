import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdentificationComponent} from "./components/identification/identification.component";

const routes: Routes = [
  { path: '', redirectTo: '/identification', pathMatch: 'full' },
  { path: 'identification', component: IdentificationComponent },
  { path: 'customer-details/:id', component: Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
