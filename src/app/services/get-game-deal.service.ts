import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGameDealService {
	constructor(private _httpClient: HttpClient){}

	// Will use backend to make API requests
	getGameDeal(title: String, steamID: String): Observable<any> {
		// console.log('title',title);
		const options = {_title: title, _steamID: steamID};

		return this._httpClient.post('/cheapshark-api/search-game-deal', options);
	}

	// Based on data we get back from ChSh API, we return a link as a string
	getLink(title: String, data: any[]): String {
		// Check if data array is empty
		if(data.length === 0){
			return this.toGoogleShopLink(title);
		} else {
			const deal = data[0];
			const id = deal.cheapestDealID;
			return `http://www.cheapshark.com/redirect?dealID=${id}`;
		}
	}

	toGoogleShopLink(title: String): String {
		const q = title.replace(' ','+').toLowerCase();
		console.log('q',q);
	
		return `https://www.google.com/search?q=${q}+video+game&source=lnms&tbm=shop`;
	}



}


