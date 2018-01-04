import { Injectable } from '@angular/core';

// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';
import { getPlatform } from '@angular/core/src/application_ref';

@Injectable()
export class GetPlatformsService {
	constructor(private _httpClient: HttpClient){}

	//Will use backend to make API requests
	getPlatforms(): Observable<any> {
		console.log('getPlatforms service: getPlatforms');

    return this._httpClient.get('/igdb-api/get-platforms');
            // .map(res => res.json());
  }

  // Test route
  getTestData(): Observable<any> {
    console.log('getTestData');
    return this._httpClient.get('/igdb-api/record-test');
    // .map(res => res.json());
  }
  
  getSortedPlatforms(): any {
    console.log('getSortedPlatforms');
    // this.getPlatforms()
    // .subscribe(list => {
    //   return list.sort((a,b) => {
    //     console.log('a',a);
    //     console.log('b',b);
    //     return (a.name > b.name);
    //   });
    // });
  }

  sortedByName(arr: any[]): any[] {
    return arr.sort((a,b) => {
          // console.log('a',a);
          // console.log('b',b);
          return (a.name > b.name ? 1 : -1);
        });
  }

}


