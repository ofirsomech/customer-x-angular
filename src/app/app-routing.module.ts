import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './components/identification/identification.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/identification', pathMatch: 'full' },
  { path: 'identification', component: IdentificationComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
