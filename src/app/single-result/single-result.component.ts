import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

import { SingleGameService } from '../services/single-game.service';
import { UtilitiesService } from '../services/utilities.service';
import { SmoothScrollService } from '../services/smooth-scroll.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() results: any[];

  currentIndex: number = 0;
  currentResult: any;
  addImageLoadedProp = this.utilitiesService.addImageLoadedProp;
  imagesLoadedCount: number = 0;

  constructor(
    private singleGameService: SingleGameService,
    private utilitiesService: UtilitiesService,
    private smoothScrollService: SmoothScrollService
  ) { 
    PageScrollConfig.defaultDuration = this.smoothScrollService.duration;
    PageScrollConfig.defaultEasingLogic = this.smoothScrollService.easingLogic;
  }

  ngOnInit() {
    this.currentResult = this.results[this.currentIndex];

    if(this.currentResult){
      // setTimeout(() => { document.getElementById('link-single-more-info').focus(); }, 0);
    }
    
  }

  ngOnChanges() {
    //---------- Reset
    this.currentIndex = 0;
    
    this.currentResult = this.results[this.currentIndex];
  }

  toggleGame(dir) {
    if(dir === 'prev'){
      this.currentIndex = Math.abs(this.currentIndex - 1 + this.results.length) % this.results.length;
    }

    if(dir === 'next'){
      this.currentIndex = Math.abs(this.currentIndex + 1 + this.results.length) % this.results.length;
    }
    
    this.currentResult = this.results[this.currentIndex];

    //---------- Update observable
    this.singleGameService.updateGame(this.currentResult);

    if(this.currentResult){
      // TODO: We want to trigger this only after at least one image has loaded. Otherwise we don't end up scrolling to the right spot.
      // setTimeout(() => {this.smoothScrollService.scrollTo('.result-container')}, 0);
    }
  }
  
  imageLoaded(result, type){
    this.addImageLoadedProp(result, type);
    this.imagesLoadedCount++;

    this.utilitiesService.firstImageHasLoaded(this.imagesLoadedCount)
    .then(() => {
      console.log('now we scroll');
      setTimeout(() => {this.smoothScrollService.scrollTo('.result-container')}, 0);
      setTimeout(() => { document.getElementById('link-single-more-info').focus(); }, 0);
    });


  }


}
