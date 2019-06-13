import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-removebook',
  templateUrl: './removebook.component.html',
  styleUrls: ['./removebook.component.css']
})
export class RemovebookComponent implements OnInit {
  books;
  title;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
 rembook(){
  console.log(this.title);
  let data = {Title:this.title}
  let url = "http://localhost:8000/books/remove"
  this.http.post(url,{Bookitem:data}).subscribe(result=>{
    console.log("data deleted....")
  })

}
}