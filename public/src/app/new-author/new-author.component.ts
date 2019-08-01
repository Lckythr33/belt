import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: any;
  errorsObject: any;
  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: "", age: ""};
  }

createNewAuthor(){
  let obs = this._httpService.createAuthor(this.newAuthor)
  obs.subscribe((data: any) => {
    if(data.errors) {
      this.errorsObject = data.errors
      console.log(this.errorsObject);
    } else {
    this._router.navigate(['/restaurants']);
    } 

  }) 

}

}
