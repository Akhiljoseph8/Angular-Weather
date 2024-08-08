import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/user/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit  {
  locations:any=[]
  count:number=0
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
 this.count=this.locations.length

}


}

