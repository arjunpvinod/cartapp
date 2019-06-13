import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { RemovebookComponent } from './removebook/removebook.component';
import { SearcheditComponent } from './searchedit/searchedit.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const approutes:Routes=[
  {path:"Add",component:BooksComponent},
  {path:"View",component:ViewbookComponent},
  {path:"Delete",component:RemovebookComponent},
  {path:"Edit",component:SearcheditComponent},
  {path:"Home",component:HomeComponent}

 
]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    ViewbookComponent,
    RemovebookComponent,
    SearcheditComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
