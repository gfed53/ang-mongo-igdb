import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service to store data for initially retrieved game (game which will be used as a basis to find related games).
@Injectable()
export class SingleGameService {
	constructor(private _httpClient: HttpClient){}

	// Use observable source/stream for singleSearchResults
	private singleSearchResultsSource = new Subject<any>();
  singleSearchResults$ = this.singleSearchResultsSource.asObservable();
	
	// Use observable for our currently selected game.
	private currentGameSource = new Subject<any>();
	currentGame$ = this.currentGameSource.asObservable();

	// Takes array of items and pushes it to source
	updateResults(list: any[]): void {
		// Should we not push list to source if length === 0?
		this.singleSearchResultsSource.next(list);
  }

	// Takes an object (game), pushes to source, observable gets updated.
	updateGame(game: any): void {
		// Should we not push game to source if game === null?
		this.currentGameSource.next(game);
	}

}