import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';
// import { UtilitiesService } from './utilities.service';

@Injectable()
export class GetGenresService {
	constructor(private _httpClient: HttpClient){}

	//Will use backend to make API requests
	getGenres(): Observable<any> {
		console.log('getPlatforms service: getPlatforms');

    return this._httpClient.get('/igdb-api/get-genres');
            // .map(res => res.json());
  }
}


