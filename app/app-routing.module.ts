import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import {CommentComponent} from './comment/comment.component';

const routes: Routes = [
  { path :'', redirectTo:'post' , pathMatch:'full'},
  { path :'post' , component:PostComponent},
  { path :'comment' , component:CommentComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
