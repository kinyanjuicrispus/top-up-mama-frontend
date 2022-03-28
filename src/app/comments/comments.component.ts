import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  error =false;
  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.commentService.getComments().subscribe(data=>{
      if(data.success){
        this.comments = data.data;
      }else{
        this.error = true;
      }
    });
  }

}
