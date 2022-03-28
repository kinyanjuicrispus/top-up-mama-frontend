import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { CommentsService } from 'src/app/services/comments.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  books: any[] = [];
  error =false;
  comment: string = '';
  isbn: string = '';
  public_ip: string = ';'
  constructor(private bookService: BooksService, private commentService: CommentsService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getIp();
    this.getBooks();
  }

 getBooks(){
    this.bookService.getBooks().subscribe(data=>{
      if(data.success){
        this.books = data.data;
      }else{
        this.error = true;
      }
    });
  }

  saveComment(){
    if(!this.comment){
      this.toastr.error('Please enter a comment first');
      return;
    }
    if(!this.isbn){
      this.toastr.error('Please select a book first');
      return;
    }
    let data = {
      'comment': this.comment,
      'book_isbn': this.isbn,
      'ip_address': this.public_ip
    };
    this.commentService.saveComment(data).subscribe(data=>{
      if(data.success){
        this.toastr.success('success', data.message);
        this.router.navigate(['/comments']);
      }else{
        this.toastr.error('Error', data.message);
      }
    });
  }
  getIp(){
    this.commentService.getIPAddress().subscribe((data: any) => {
      this.public_ip = data.ip;
    });
  }
}
