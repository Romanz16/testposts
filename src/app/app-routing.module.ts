import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent},
  { path: 'post/:idpost', component: PostComponent },
  { path: 'user/:iduser', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
