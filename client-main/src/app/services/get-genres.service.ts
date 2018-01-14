import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGenresService {
	constructor(private _httpClient: HttpClient){}

	getGenres(): Observable<any> {
    return this._httpClient.get('/igdb-api/get-genres');
  }
}


