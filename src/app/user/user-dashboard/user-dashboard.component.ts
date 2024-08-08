import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  locations:any=[]
  constructor(private api:ApiService,private toastr:ToastrService){}
   
  ngOnInit(): void {
      this.api.getLocation()
      .subscribe({
       next:(res:any)=>{
         this.getData(res)
       },
       error:(err:any)=>{
 
       }
      })
  }
  getData(data:any){
   this.locations=data
   console.log(this.locations)
  }
 
  
}
