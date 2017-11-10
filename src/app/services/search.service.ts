import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	constructor(private _http: Http){}

	//Will use backend to make API requests
	getGames(q): Observable<any> {
		console.log('search service: getGames');
		console.log('q', q);

		return this._http.post('/igdb-api/search-games', {
			_q: q
		}).map(res => res.json());
	}

}


