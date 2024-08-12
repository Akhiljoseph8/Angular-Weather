import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  data:any=""
  image:any=""
  constructor ( private dataService: DataService ) { }
  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.data=data
      if(this.data.currentConditions.icon==="sunny"){
       this.image="https://img.freepik.com/premium-photo/sunny-day-with-sun-shining-through-clouds_1102944-9644.jpg?w=996"
      }else if(this.data.currentConditions.icon==="rain"){
       this.image="https://img.freepik.com/premium-photo/background-heavy-rain-high-resolution-photorealistic-close-up-shot-isolated-dark-grey-ba_1045176-15025.jpg?w=996"
      }else if(this.data.currentConditions.icon==="partly-cloudy-day" || this.data.currentConditions.icon==="cloudy" || this.data.currentConditions.icon==="cloudy-day" || this.data.currentConditions.icon==="partly-cloudy-night"){
        this.image="https://img.freepik.com/premium-photo/scenic-view-seascape-against-cloudy-sky_1048944-14514540.jpg?size=626&ext=jpg&ga=GA1.1.1304997828.1723465967&semt=ais_hybrid"
       }
       else if(this.data.currentConditions.icon==="clear-day" || this.data.currentConditions.icon==="clear-sky"){
        this.image="https://img.freepik.com/free-photo/green-grassy-park-field-outdoors-concept_53876-74927.jpg?ga=GA1.1.1304997828.1723465967&semt=ais_hybrid"
       }
       
    });
    
}
}

