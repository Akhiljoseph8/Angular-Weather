import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
server_url:string="https://weather-json-server-1.onrender.com"
  constructor(private http:HttpClient) { }
  addLocation(data:any){
    return this.http.post(`${this.server_url}/locations`,data)
  }
  getLocation(){
    return this.http.get(`${this.server_url}/locations`)
  }

}
