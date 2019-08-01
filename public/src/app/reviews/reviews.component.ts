import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
restaurant:any
  newReview: any;
  errorsObject: any;
  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data =>{
      //(data['id'])
      this.getRest(data['id']);
    })
    this.newReview = {name: '', review: '', stars:"" }
  }

  getRest(r_id){
    this._httpService.getReviews(r_id).subscribe(single => {
      this.restaurant = single;
    })
  }

  addReview(){
    this._httpService.addReview(this.newReview, this.restaurant['_id']).subscribe(data =>{
      console.log(data)
      if(data['errors']) {
        this.errorsObject = data['errors']
        console.log(this.errorsObject);
      } else {
      this._router.navigate(['/restaurants',this.restaurant['_id']])}
    })
  }
}
