import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  title;author;price

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  Newbook()
{
  console.log(this.title);
  let data = {Title:this.title,Author:this.author,Price:this.price}
  let url = "http://localhost:8000/books/add"
  this.http.post(url,{Bookitem:data}).subscribe(result=>{
    console.log("data entered....")
  })
}}

