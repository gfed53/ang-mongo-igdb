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
  }

  // This utility method will take a list (genres, platforms) and convert array to just array of id's.
  getIds(list){
    return list
            .map((item) => item.id);
  }

  // Adds an ANY default option with null value
  postConfig(arr: any[]): any[] {
    arr.unshift({
      name: 'Any',
      id: null
    });

    return arr;
  }

  checkDateValid(date){
    // Empty inputs are valid 
    if(date === ''){
      return true;
    }
    // Returns true if date is, after converted to an int, somewhere between 1950 and current year + 1
    let dateInt = parseInt(date);
    let latest = new Date().getFullYear() + 1;

    // 
    return dateInt >= 1950 && dateInt <= latest;
  }

  // Single Result: change properties of result object on load event, which ngClass checks for in order to fade in image at appropriate time
  onImageLoad(item, type){
    if(type === 'screenshot'){
      item.screenshots.loaded = true;
    } else if(type === 'cover'){
      item.cover.loaded = true;
    }

    console.log('changed item:',item);
  }

}