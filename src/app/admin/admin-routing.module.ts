import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [{ path: '', component: AdminDashboardComponent },
  { path: 'addlocation', component: AddLocationComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
