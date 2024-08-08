import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location:any){
  
    return this.http.get(
    
        // 'https://api.apixu.com/v1/current.json?key=e57433dbf8ded8de0c268fa4c63a41f9&q=' + location
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9T3LEJQCDML7VTUA5VYA2SE9Q`
        
    );
}
}
