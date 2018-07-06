import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGameDealService {
	constructor(private _httpClient: HttpClient){}

	// Will use backend to make API requests
	getGameDeal(title: String, steamID: String): Observable<any> {
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
		// If we have a homepage...
		const homepage = game.websites ? game.websites.filter((item) => item.category === 1)[0] : null;
		if(homepage){
			return homepage.url;
		} else {
			return this.toGoogleShopLink(game.name);
		}
	}

	toGoogleShopLink(title: String): String {
		const q = title.replace(' ','+').toLowerCase();
		return `https://www.google.com/search?q=${q}+video+game&source=lnms&tbm=shop`;
	}

	// For now, the way we'd determine this would be if the release date was no later than 1 month from now.
	// We'll use this boolean to determine whether button to create link even shows up at all.
	isGameAvailable(releaseDate){
		return releaseDate - Date.now() < 2629800000;
	}



}


