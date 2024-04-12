import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.scss'
})
export class NewEntryComponent implements OnInit{
  @ViewChild('shortName', {static:false}) newShortName:ElementRef;
  @ViewChild('nameEn', {static:false}) newNameEn:ElementRef;
  @ViewChild('nameEl', {static:false}) newNameEl:ElementRef;
  

  insertSuccess:boolean = false;
  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    
  }

  addNewData(){
    let postData = {
      nameEn:this.newNameEn.nativeElement.value,
      nameEl:this.newNameEl.nativeElement.value,
      shortName:this.newShortName.nativeElement.value
    };
    this.http.post('http://144.91.80.190:9012/addCoreVolumeOfferTypesNew', postData).subscribe(responseData=>{
      console.log(responseData);
      this.insertSuccess = true;

      //Return to HomePage
      setTimeout(()=>{
        this.insertSuccess = false;
        this.router.navigate(['/']);
      }, 2000);
      
    })
  }
}
