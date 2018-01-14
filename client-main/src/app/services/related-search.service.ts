import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


// Service that handles our secondary search for related results based on our base game retrieved during our initial search.
@Injectable()
export class RelatedSearchService {
	constructor(private _httpClient: HttpClient){}

	// Will use backend to make API requests
	getRelated(game, filters?): Observable<any> {
		// console.log('search service: getGames');
		// console.log('q', q);
		// let options: any;

		// options.selectedPlatform = filters.selectedPlatform ? filters.selectedPlatform : null;
		// options.selectedGenre = filters.selectedGenre ? filters.selectedGenre : null;

		return this._httpClient.post('/igdb-api/search-related', {
			_game: game,
			_filters: filters
		});
	}

}