import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable.js';
import 'rxjs/add/operator/map';
import { getPlatform } from '@angular/core/src/application_ref';

@Injectable()
export class GetPlatformsService {
	constructor(private _http: Http){}

	//Will use backend to make API requests
	getPlatforms(): Observable<any> {
		console.log('getPlatforms service: getPlatforms');

    return this._http.get('/igdb-api/get-platforms')
            .map(res => res.json());
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


