import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
	constructor(){}

  sortedByName(arr: any[]): any[] {
    return arr.sort((a,b) => {
          return (a.name > b.name ? 1 : -1);
        });
  }

  getChecked(list){
    // API uses array of ID's to accept multiple params for filters
    // eg. 'filter[release_dates.platform][any]': [48,26]
    // This utility method will take a list (genres, platforms) and filter out all but checked items.
    // This method will most likely just be used for getting related results after a search for a single game.
    
    return list
            .filter((item) => item.checked);
            // .map((item) => item.id);
                  
    // console.log(result);
  }

  // This utility method will take a list (genres, platforms) and convert array to just array of id's.
  getIds(list){
    return list
            .map((item) => item.id);
  }

  // Similar to getChecked, but instead of grabbing id's, we want to map the name property.
  // Possible TODO: instead of using two different methods, maybe just use one to return whole platform object.
  getLabels(list){
    return list
            .map((item) => item.name);
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