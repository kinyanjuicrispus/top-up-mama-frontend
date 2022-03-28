import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { CommentsComponent } from './comments/comments.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';


const routes: Routes = [
  {path: '',component: BooksComponent },
  {path:'characters', component:CharactersComponent},
  {path:'comments', component:CommentsComponent},
  {path:'add-comment', component:AddCommentComponent},
  {path:'edit-comment: id', component:EditCommentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
