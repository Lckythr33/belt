import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAuthorsComponent,
    NewAuthorComponent,
    EditAuthorComponent,
    ReviewsComponent,
    ShowReviewsComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
