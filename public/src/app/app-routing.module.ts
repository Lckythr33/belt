import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';



const routes: Routes = [
  { path: 'restaurants', component: AllAuthorsComponent },
  { path: 'restaurants/new', component: NewAuthorComponent },
  { path: 'restaurants/:id/edit', component: EditAuthorComponent },
  { path: 'restaurants/:id/review', component: ReviewsComponent },
  { path: 'restaurants/:id', component: ShowReviewsComponent },

  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
