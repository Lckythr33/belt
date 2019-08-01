import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
@Input() restaurant: any;
@Output() event = new EventEmitter();
isNew=false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
console.log(this.restaurant)
    let now: any= new Date();
    let createdAt: any = new Date(this.restaurant.createdAt);
    const time = now - createdAt;
    if(time < 10000) {
      this.isNew = true;
      setTimeout(()=>{
        this.isNew= false;

      },(10000- time));
    }
  }


delete(){
  this._httpService.deleteAuthor(this.restaurant._id).subscribe(data => {
    console.log(data)
    this.event.emit();
  })
}

}
