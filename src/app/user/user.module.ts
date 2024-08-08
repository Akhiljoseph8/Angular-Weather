import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ApixuService } from './services/apixu.service';

@NgModule({
  declarations: [
    UserComponent,
    WeatherReportComponent,
    UploadExcelComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [ApixuService]
})
export class UserModule { }
