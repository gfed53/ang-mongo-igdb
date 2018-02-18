import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
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

	// get latest() {
	// 	return this.singleSearchResults;
	// }

	// Will use backend to make API requests
	getGame(q, filters?): Observable<any> {
		return this._httpClient.post('/igdb-api/search-game', {
			_q: q,
			_filters: filters
		});
	}

	// Takes array of items and pushes it to source
	updateSingle(list: any[]): void {
		this.singleSearchResultsSource.next(list);
	}

	updateSingleResults(list: any[]): void {
		this.singleSearchResults = list;
		console.log('this.singleSearchResults',this.singleSearchResults);
	}

}


