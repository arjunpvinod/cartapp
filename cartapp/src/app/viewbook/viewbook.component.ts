import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
book;
  constructor(private http:HttpClient) { 
    this.book = [];
  }

  ngOnInit() {
    let url = "http://localhost:8000/books/view"
    this.http.get(url).subscribe(data=>{
      this.book = data
      console.log(this.book)
    })
  }

}
