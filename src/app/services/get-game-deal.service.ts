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
	getLink(game: any, data: any[]): String {
		// Check if data array is empty
		if(data.length === 0){
			return this.getAltLink(game);
		} else {
			const deal = data[0];
			const id = deal.cheapestDealID;
			return `http://www.cheapshark.com/redirect?dealID=${id}`;
		}
	}

	getAltLink(game): String {
		// If we have a homepage ???....
		const homepage = game.websites ? game.websites.filter((item) => item.category === 1)[0] : null;
		if(homepage){
			console.log('website',homepage.url);
			return homepage.url;
		} else {
			return this.toGoogleShopLink(game.name);
		}
	}

	toGoogleShopLink(title: String): String {
		const q = title.replace(' ','+').toLowerCase();
		console.log('q',q);
	
		return `https://www.google.com/search?q=${q}+video+game&source=lnms&tbm=shop`;
	}

	// TODO: If game is free-to-play, we just want to link to game's homepage
	// Can we find the keyword tag number for free-to-play?

	// 2385?

	// Not sure how to actually do this. API doesn't seem to provide any way to figure out what each keyword actually means (aside from one very specific example in docs that don't help us at all..)
	
	// Maybe just link to game's homepage if we ChSh doesn't find it, and call it a day.
	// If we don't have a homepage (for older games), then create Google shopping link.



}


