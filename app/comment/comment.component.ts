import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   apiUrl="https://jsonplaceholder.typicode.com/comments";
   apiComment;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    {
      this.http.get(this.apiUrl).subscribe((data)=>{
      console.log(data)
       this.apiComment=data;
    })
    }
  }

}
