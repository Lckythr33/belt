import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { EditAuthorComponent } from '../edit-author/edit-author.component';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors: any;
  clicked = false;
  updateRestaurant: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    let obs = this._httpService.getAllAuthors();
    obs.subscribe(data =>{
      this.allAuthors = data;
      console.log(data);
    })
  }

  update(data){
    this.clicked=true;
    this.updateRestaurant=data;
  }

  updated(){
    this.clicked = false;
    this.getAllAuthors();
  }
  
  deleteAuthor(id){
    this._httpService.deleteAuthor(id).subscribe(response=>{ this.getAllAuthors();})
  }

}
