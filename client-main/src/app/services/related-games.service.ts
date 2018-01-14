import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service used to store games related to our initially searched game.
@Injectable()
export class RelatedGamesService {
	constructor(private _httpClient: HttpClient){}

	// Use observable source/stream for singleSearchResults
	private relatedSearchResultsSource = new Subject<any>();
	relatedSearchResults$ = this.relatedSearchResultsSource.asObservable();


	

}