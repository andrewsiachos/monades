import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HandleUpdateService } from '../handle-update.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent implements OnInit{

  //currentList = [
    //{shortName:'ΤΜΧ', nameEn:'PIECE', nameEl:'ΤΕΜΑΧΙΟ'},
    //{shortName:'LT', nameEn:'LITRE', nameEl:'ΛΙΤΡΑ'},
    //{shortName:'KG', nameEn:'KG', nameEl:'ΚΙΛΑ'},
  //];
  currentList;
  constructor(private router:Router, private http:HttpClient, private updateService:HandleUpdateService){}

  ngOnInit(): void {
    this.http.post('http://144.91.80.190:9012/getCoreVolumeOfferTypesNew', {}).subscribe(responseData=>{
      this.currentList = responseData['data'];
    });
  }

  goToAddNew(){
    this.router.navigate(['/new-entry']);
  }

  goToUpdate(i:number){
    this.updateService.updateSelectedUnit(
      this.currentList[i]['id'],
      this.currentList[i]['nameEn'],
      this.currentList[i]['nameEl'],
      this.currentList[i]['shortName']
    );
    this.router.navigate(['/edit', this.currentList[i]['nameEn'].toLowerCase()]);
  }
}
