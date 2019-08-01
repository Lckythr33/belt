import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
@Input() clickRes: any;
@Output() updateEvent = new EventEmitter();

author: any;
errorsObject:any;
  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id']);
    })
  }

getAuthor(id) {
  let obs = this._httpService.getAuthors(id);
  obs.subscribe(data => {
    console.log(data);
    this.author = data;
  })
}

editAuthor(){
  let observable = this._httpService.editAuthor(this.clickRes['_id'], this.clickRes)
  observable.subscribe((data:any) => {
    if(data.errors) {
      this.errorsObject = data.errors
      console.log(this.errorsObject);
    } else {
   this.updateEvent.emit();
    } 
    // console.log("successfully updated author!")

    // this._router.navigate(['/restaurants']);
  })
}

cancel(event: any){
  event.preventDefault();
this.updateEvent.emit();
}

}
