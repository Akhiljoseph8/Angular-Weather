import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AddLocationComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
