import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ApixuService } from '../services/apixu.service';
import { DataService } from '../services/data.service';
import {Router} from "@angular/router"
// import { FormBuilder, FormGroup } from '@angular/forms';
type AOA = any[][];

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent{
  // public weatherSearchForm:any= FormGroup;
   loc:any=""
  constructor(private apixuService: ApixuService, private datService:DataService,private router: Router) {}
  ngOnInit() {
    
  }
  data: AOA = [[, ], [, ]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
 
 

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
   
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log("data:",this.data);
      this.data.map(res=>{
        if(res[0] === "no"){
          console.log(res[0]);
        }else{
          console.log(res[0]);
        }
      })
      console.log(this.data[0])

      this.apixuService
      .getWeather(this.data[0])
      .subscribe({next:(res:any)=>{
      this.loc=res
      console.log(this.loc)
      this.datService.setData(this.loc);
      this.router.navigate(['user/report'])
      }
      })
    };
    
    reader.readAsBinaryString(target.files[0]);
  }
}
