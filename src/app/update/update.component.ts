import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HandleUpdateService } from '../handle-update.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  @ViewChild('newShortName', {static:false}) newShortName:ElementRef;
  @ViewChild('newNameEn', {static:false}) newNameEn:ElementRef;
  @ViewChild('newNameEl', {static:false}) newNameEl:ElementRef;


  successfulUpdate: boolean = false;
  successfulDelete: boolean = false;
  constructor(
    private updateService:HandleUpdateService, 
    private router:Router,
    private http:HttpClient
  ){}
  
  
  unitToUpdate;

  ngOnInit(): void {
    this.unitToUpdate = this.updateService.selectedUnit;
  }

  updateUnit(){
    this.http.post('http://144.91.80.190:9012/updateCoreVolumeOfferTypesNew', {
      id:this.unitToUpdate.id,
      nameEn:this.newNameEn.nativeElement.value,
      nameEl:this.newNameEl.nativeElement.value,
      shortName:this.newShortName.nativeElement.value
    }).subscribe(responseData=>{
      console.log(responseData);
      this.successfulUpdate = true;
      //Return to homepage
      setTimeout(()=>{
        this.successfulUpdate = false;
        this.router.navigate(['/']);
      },2000);
    })
  }

  deleteUnit(){
    this.http.post('http://144.91.80.190:9012/deleteCoreVolumeOfferTypesNew',{
      id:this.unitToUpdate.id
    }).subscribe(responseData=>{
      console.log(responseData);
      this.successfulDelete = true;

      //Return to Homepage
      setTimeout(()=>{
        this.successfulDelete = false;
        this.router.navigate(['/']);
      }, 2000);
    })
  }


  returnToHomepage(){
    this.router.navigate(['/']);
  }
}
