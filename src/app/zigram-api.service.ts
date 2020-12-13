import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZigramApiService {
apiUrl="https://www.thecocktaildb.com/api/json/v1/";
  constructor(private client: HttpClient) { }

  get(endpoint: string, data:Object={}): Observable<{}>{
    endpoint +='?' + this.buildParams(data);
    return this.client.get(this.apiUrl+ endpoint);
  }

  buildParams(object:Object){
    return Object.keys(object).map((k)=> {
      return encodeURIComponent(k) + '=' +encodeURIComponent(object[k])
    }).join('&');
  }
}
