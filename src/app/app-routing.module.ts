import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [{path:'',component:UserDashboardComponent }, 
  { path: 'login', component: LoginComponent},
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[authGuard]}, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
   {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
