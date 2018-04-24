import { Component, Input } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

import { SingleGameService } from '../services/single-game.service';
import { SmoothScrollService } from '../services/smooth-scroll.service';

@Component({
  selector: 'app-related-results',
  templateUrl: './related-results.component.html',
  styleUrls: ['./related-results.component.scss']
})
export class RelatedResultsComponent {

  @Input() relatedResults: any;

  constructor(
    private singleGameService: SingleGameService,
    private smoothScrollService: SmoothScrollService
  ) { 
    PageScrollConfig.defaultDuration = this.smoothScrollService.duration;
    PageScrollConfig.defaultEasingLogic = this.smoothScrollService.easingLogic;
  }

  //---------- For game item, sets value on item object indicating that image has been loaded
  addImageLoadedProp(item) {
    item.imageLoaded = true;
  }

  //---------- Use a related search result as the new basis 
  updateSingleResult(item){
    let a = [item];
    this.singleGameService.updateResults(a);
    this.singleGameService.updateGame(item);
    setTimeout(() => {this.smoothScrollService.scrollTo('.single-result-container')}, 0);
  }

}
