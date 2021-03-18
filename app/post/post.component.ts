import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  apiData;
  constructor(private http:HttpClient) { }

  ngOnInit()
  {
    this.http.get(this.apiUrl).subscribe((data)=>{
    console.log(data)
     this.apiData=data;
  })
  }
}
