import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import * as $ from 'jquery';

@Injectable()
export class UtilitiesService {
  constructor(){}
  
  // Cached related results DOM values



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

  getIds(list: any[]){
    /*-------------------------------
    Takes a list (genres, platforms) and converts array to just array of id's.
    */
    return list
            .map((item) => item.id);
  }

  postConfig(arr: any[]): any[] {
    /*-------------------------------
    Adds an ANY default option with null value
    */
    arr.unshift({
      name: 'Any',
      id: null
    });

    return arr;
  }
  
  onImageLoad(item: any, type: string): void {
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
    For Related Results component: dynamically creates image links and attach them to item object
    */
    return a.map((item)=> {
      if(item.cover){
        item.cover.realUrl = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.cover.cloudinary_id}.jpg`;
      }

      return item;
    })
  }

  isElementBelowWindowTop(element){
    // let windowTop = window.scrollY;
    // console.log('windowTop',windowTop);
    // let $element = $(element);
    // console.log('element',$element);
    // console.log('window top',$(window).scrollTop());
    // console.log('element top',$element.scrollTop());

    // return true;
    // let rect = element.getBoundingClientRect();
    // console.log('rect',rect);

    // let elementTop = rect.top;

    // // return windowTop > elementTop;
    // return elementTop < 0;

  }

}