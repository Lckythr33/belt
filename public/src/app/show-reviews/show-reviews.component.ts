import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {
reviews: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAllReviews();
  }

  getAllReviews(){
    this._route.params.subscribe((params:Params) =>{
      this._httpService.getReviews(params['id']).subscribe(data =>{
        console.log(data)
        this.reviews = data['reviews']
      })

    })

  }

}
