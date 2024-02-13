import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Promise<any> {
    return firstValueFrom(this.http.get(`${url}`))
  }

  post(url: string, body: any): Promise<any> {
    return firstValueFrom(this.http.post(`/api/${url}`,body))
  }
}
