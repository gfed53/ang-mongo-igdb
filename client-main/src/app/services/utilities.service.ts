import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {
	constructor(){}

  sortedByName(list: any[]): any[] {
    return list.sort((a,b) => {
          return (a.name > b.name ? 1 : -1);
        });
  }

  getChecked(list: any[]){
    // API uses array of ID's to accept multiple params for filters
    // eg. 'filter[release_dates.platform][any]': [48,26]
    // This utility method will take a list (genres, platforms) and filter out all but checked items.
    // This method will most likely just be used for getting related results after a search for a single game.
    
    return list
            .filter((item) => item.checked);
  }

  // This utility method will take a list (genres, platforms) and convert array to just array of id's.
  getIds(list: any[]){
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

  // Single Result: change properties of result object on load event, which ngClass checks for in order to fade in image at appropriate time
  onImageLoad(item: any, type: string): void {
    if(type === 'screenshot'){
      item.screenshots.loaded = true;
    } else if(type === 'cover'){
      item.cover.loaded = true;
    }
  }

  // Related Results: dynamically create image links and attach them to item object
  setImageLinks(a: any[]): any {
    return a.map((item)=> {
      if(item.cover){
        item.cover.realUrl = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.cover.cloudinary_id}.jpg`;
      }

      return item;
    })
  }

}