import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'new-entry', component:NewEntryComponent},
  {path:'edit/:name', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
