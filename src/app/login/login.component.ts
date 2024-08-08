import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private toastr: ToastrService, private auth:AuthService, private router:Router){
  }
  ngOnInit() {
    if (sessionStorage.getItem('admin')) {
      this.logStatus=true
      
    } else {
      this.logStatus=false
    }
  
  }
   email:string=""
   password:string=""
   logStatus:any=false
   handleLogin(){
    if(this.email && this.password){
      const result= this.auth.getAdmin()
      result.subscribe({
        next: (res:any)=>{
          if(this.email==res.email && this.password==res.password){
            this.toastr.success("Login successfull")
            this.auth.isLoggedIn()
            this.email=""
            this.password=""
            sessionStorage.setItem('admin',JSON.stringify(res))
            this.logStatus=true
            this.ngOnInit()
            this.router.navigateByUrl('/admin')
          }else{
            this.toastr.error("Login Failed")
          }
        },error:(err)=>{
           console.log(err)
        }
      })
     
    }else{
      this.toastr.warning("Invalid")
    }
   }
}
