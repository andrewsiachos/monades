import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleUpdateService {

  constructor() { }

  selectedUnit:{id: number, nameEn: string, nameEl: string, shortName: string};

  updateSelectedUnit(currentId, currentNameEn, currentNameEl, currentShortName){
    this.selectedUnit = {id:currentId, nameEn:currentNameEn, nameEl:currentNameEl, shortName:currentShortName};
  }
}
