import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  server_url:string="https://weather-json-server-1.onrender.com"

  constructor(private http:HttpClient) { }
  getAdmin(){
    return this.http.get(`${this.server_url}/admin/1`)
  }

  isLoggedIn(){
  return !!sessionStorage.getItem("admin")
}

}
