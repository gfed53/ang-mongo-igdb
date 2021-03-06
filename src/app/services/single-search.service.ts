import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class SingleSearchService {
	constructor(private _httpClient: HttpClient){}

	// Use observable source/stream for singleSearchResults
	private singleSearchResultsSource = new Subject<any>();
	singleSearchResults$ = this.singleSearchResultsSource.asObservable();

	singleSearchResults: any[];

	// Will use backend to make API requests
	getGame(q, filters?): Observable<any> {
		return this._httpClient.post('/igdb-api/search-game', {
			_q: q,
			_filters: filters
		});
	}

}


