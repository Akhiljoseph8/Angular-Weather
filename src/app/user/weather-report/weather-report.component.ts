import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  data:any=""
  constructor ( private dataService: DataService ) { }
  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.data=data
    });
}
}
