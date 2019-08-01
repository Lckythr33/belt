import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  
  constructor(private _http: HttpClient) { }
  
  getAllAuthors(){
    return this._http.get('/api/restaurants');
  }
  
  createAuthor(newAuthor: any) {
    return this._http.post('/api/restaurants', newAuthor);
  }
  
  addReview(newReview: any, r_id: String) {
    return this._http.post(`/api/restaurants/${r_id}`, newReview);
  }
  
  getAuthors(id: any) {
    return this._http.get('/api/restaurants/'+id);
  }
  
  deleteAuthor(id){
    return this._http.delete('api/restaurants/'+id);
  }
  
  editAuthor(id: any, author: any) {
    return this._http.put('/api/restaurants/'+id, author);
  }
  
  getReviews(id:any){
    return this._http.get(`/api/restaurants/${id}`)
  }
  
}
