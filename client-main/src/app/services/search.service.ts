import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	constructor(private _httpClient: HttpClient){}

	//Will use backend to make API requests
	getGames(q): Observable<any> {
		console.log('search service: getGames');
		console.log('q', q);

		return this._httpClient.post('/igdb-api/search-games', {
			_q: q
		});
		// .map(res => res.json());
	}

}


