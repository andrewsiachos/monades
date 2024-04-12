import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NewEntryComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
