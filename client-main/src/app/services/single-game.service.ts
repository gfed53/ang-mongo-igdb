import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class SingleGameService {
	constructor(private _httpClient: HttpClient){}

	// Use observable source/stream for singleSearchResults
	private singleSearchResultsSource = new Subject<any>();
  singleSearchResults$ = this.singleSearchResultsSource.asObservable();
  
  // The index is used to determine the current game selected within singleSearchResults array.
  // Rather than just holding onto a single game, for now we'll continue using observables for both array and index.
  private currentGameIndexSource = new Subject<number>();
	currentGameIndex$ = this.currentGameIndexSource.asObservable();
	
	// An alternate method would be to use an observable for our currently selected game.
	private currentGameSource = new Subject<any>();
	currentGame$ = this.currentGameSource.asObservable();

  // singleSearchResults: any[];
  // currentGameIndex: number = 0;

	// get latest() {
	// 	return this.singleSearchResults;
	// }

	// Takes array of items and pushes it to source
	updateResults(list: any[]): void {
		// console.log('list',list);
		this.singleSearchResultsSource.next(list);
		// console.log('source',this.singleSearchResultsSource);
		// console.log('stream',this.singleSearchResults$);
  }
  
  // Takes number, pushes it to subject source, observable gets updated
  updateIndex(i: number): void {
    this.currentGameIndexSource.next(i);
  }

	updateGame(game: any): void {
		console.log('updateGame, game:',game);
		this.currentGameSource.next(game);
	}

}