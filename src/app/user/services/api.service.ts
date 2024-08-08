import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url:string="http://localhost:3000"
  constructor(private http:HttpClient) { }
  getLocation(){
    return this.http.get(`${this.server_url}/locations`)
  }
}
