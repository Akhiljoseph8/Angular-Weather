import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logStatus:any=false
  constructor(private toastr:ToastrService,private auth:AuthService, private router:Router){}
  ngOnInit() {
    if (sessionStorage.getItem('admin')) {
      this.logStatus=true
      
    } else {
      this.logStatus=false
    }
  
  }

  logout(){
    this.logStatus=false
    sessionStorage.removeItem('admin')
    this.toastr.info("Admin Logged Out")
    this.router.navigateByUrl(' ')
  }
}
