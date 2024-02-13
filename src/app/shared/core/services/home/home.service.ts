import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpService) { }

  getUsers(){
    return this._http.get('/home/users')
  }
}
