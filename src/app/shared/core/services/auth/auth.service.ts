import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpService) { }

  loginUser(body:any){
    return this._http.get('api/todos');
  }
}
