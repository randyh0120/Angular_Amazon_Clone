import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Our URL is a local folder
  private _jsonUrl = 'assets/data/products.json'

  constructor(private Http: HttpClient) { }

  // Adding an Observable will allow the service to wait until the data is fetched.
  getJson() : Observable<any> {
    return this.Http.get(this._jsonUrl)
  }
}
