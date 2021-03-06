import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service that handles our secondary search for related results based on our base game retrieved during our initial search.
@Injectable()
export class RelatedSearchService {
	constructor(private _httpClient: HttpClient){}

	getRelated(game, controls?): Observable<any> {

		return this._httpClient.post('/igdb-api/search-related', {
			_game: game,
			_controls: controls
		});
	}

}