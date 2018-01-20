import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

// Service used to retrieve list of genres from API
@Injectable()
export class GetGenresService {
	constructor(private _httpClient: HttpClient){}

	getGenres(): Observable<any> {
    return this._httpClient.get('/igdb-api/get-genres');
  }
}


