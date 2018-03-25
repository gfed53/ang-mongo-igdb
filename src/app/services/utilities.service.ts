import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import * as $ from 'jquery';

@Injectable()
export class UtilitiesService {

  constructor(){}

  sortedByName(list: any[]): any[] {
    return list.sort((a,b) => {
          return (a.name > b.name ? 1 : -1);
        });
  }

  getChecked(list: any[]){
    /*-------------------------------
    Takes a list (genres, platforms) and filters out all but checked items.
    */
    return list
            .filter((item) => item.checked);
  }

  getArrayOfIds(list: any[]){
    return list
            .map((item) => item.id);
  }

  addAnyOption(arr: any[]): any[] {
    arr.unshift({
      name: 'Any',
      id: null
    });

    return arr;
  }
  
  addImageLoadedProp(item: any, type: string): void {
    /*-------------------------------
    For Single Result component: changes properties of result object on load event, which ngClass checks for in order to fade in image at appropriate time
    */
    if(type === 'screenshot'){
      item.screenshots.loaded = true;
    } else if(type === 'cover'){
      item.cover.loaded = true;
    }
  }
  
  setImageLinks(a: any[]): any {
    /*-------------------------------
    For Related Results component
    */
    return a.map((item)=> {
      if(item.cover){
        item.cover.realUrl = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.cover.cloudinary_id}.jpg`;
      }

      return item;
    })
  }

}