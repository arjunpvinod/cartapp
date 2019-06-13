import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-searchedit',
  templateUrl: './searchedit.component.html',
  styleUrls: ['./searchedit.component.css']
})
export class SearcheditComponent implements OnInit {
  book;
  title;
  author;
  price;
  showtable:boolean = false;
  showedit:boolean = false;

   constructor(private http:HttpClient) { 
    this.book = [];
  }

  ngOnInit() {
  }

   searchbook(){
      console.log(this.title);
     
      let url = "http://localhost:8000/books/search"
      this.http.post(url,{Title:this.title}).subscribe(data=>{
        this.book = data
        console.log(this.book)
        this.showtable = true
  })

   }
   editbook(auth,prc,tit){
     this.author=auth
     this.price=prc
     this.title=tit
     this.showedit = true;
   }

   updatebook(){

    let data = {Title:this.title,Author:this.author,Price:this.price}
    let url = "http://localhost:8000/books/update"
    this.http.post(url,{Bookitem:data}).subscribe(result=>{
      console.log(result.toString)
    })
   
   }
 }

