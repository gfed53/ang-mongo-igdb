import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service used to store games related to our initially searched game.
@Injectable()
export class RelatedGamesService {

	private relatedSearchResultsSource = new Subject<any>();
	relatedSearchResults$ = this.relatedSearchResultsSource.asObservable();

	updateResults(list: any[]): void {
		this.relatedSearchResultsSource.next(list);
  }

}