import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
	constructor(){}

  sortedByName(arr: any[]): any[] {
    return arr.sort((a,b) => {
          // console.log('a',a);
          // console.log('b',b);
          return (a.name > b.name ? 1 : -1);
        });
  }

}