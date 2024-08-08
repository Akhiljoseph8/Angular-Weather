import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { locationSchema } from '../schemas/locationSchema';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  constructor(private api:ApiService,private toastr:ToastrService,private router:Router){}
  location:locationSchema={}

  handleSubmit(){
    const {city,district,state,country} = this.location
    if (!city || !district || !state || !country) {
      this.toastr.error("all fields required")
    } else {
      const result = this.api.addLocation(this.location)
      result.subscribe({
        next:(res:any)=>{
          console.log(res);
          this.toastr.success("location added")
          this.location={}
          this.router.navigateByUrl('/admin')
        },error:(err:any)=>{
          console.log(err);
          this.toastr.error(err)
          
        }
      })
    }
  }

  onCancel(){
    this.location={}
    this.router.navigateByUrl('/admin')
  }
}
