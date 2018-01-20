import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';
import { getPlatform } from '@angular/core/src/application_ref';

// Service used to retrieve list of platforms from API
@Injectable()
export class GetPlatformsService {
	constructor(private _httpClient: HttpClient){}

	getPlatforms(): Observable<any> {

    return this._httpClient.get('/igdb-api/get-platforms');
  }

}


