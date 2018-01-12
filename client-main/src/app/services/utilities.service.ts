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

  getChecked(list){
    // API uses array of ID's to accept multiple params for filters
    // eg. 'filter[release_dates.platform][any]': [48,26]
    // This utility method will take a list (genres, platforms), filter out all but checked items, and convert array to just array of id's.
    // This method will most likely just be used for getting related results after a search for a single game.
    
    return list
            .filter((item) => item.checked)
            .map((item) => item.id);
                  
    // console.log(result);
  }

  // Adds an ANY default option with null value
  postConfig(arr: any[]): any[] {
    arr.unshift({
      name: 'Any',
      id: null
    });

    return arr;
  }

}