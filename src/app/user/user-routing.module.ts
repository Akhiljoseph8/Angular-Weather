import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

const routes: Routes = [{ path: ' ', component: UserDashboardComponent },
  { path: 'upload', component: UploadExcelComponent },
  { path: 'report', component: WeatherReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
