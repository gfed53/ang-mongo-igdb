import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGameDealService {
	constructor(private _httpClient: HttpClient){}

	// Will use backend to make API requests
	getGameDeal(title): Observable<any> {
    // console.log('title',title);
		return this._httpClient.post('/cheapshark-api/search-game-deal', {
			_title: title
		});
	}

}


