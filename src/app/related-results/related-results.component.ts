import { Component, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';

@Component({
  selector: 'app-related-results',
  templateUrl: './related-results.component.html',
  styleUrls: ['./related-results.component.scss']
})
export class RelatedResultsComponent {

  @Input() relatedResults: any;

  constructor(
    private singleGameService: SingleGameService
  ) { }

  //---------- For game item, sets value on item object indicating that image has been loaded
  addImageLoadedProp(item) {
    item.imageLoaded = true;
  }

  //---------- Use a related search result as the new basis 
  updateSingleResult(item){
    let a = [item];
    this.singleGameService.updateResults(a);
    this.singleGameService.updateGame(item);
  }

}
