import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  apiData;
  constructor(private postdata:UserService) { }

  ngOnInit() {
    this.postdata.getPosts().subscribe((data)=>{
      this.apiData=data; 
    }
    )
  }
}
