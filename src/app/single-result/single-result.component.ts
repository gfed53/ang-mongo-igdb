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
  }
  
  imageLoaded(result, type){
    this.addImageLoadedProp(result, type);
    this.imagesLoadedCount++;

    this.utilitiesService.firstImageHasLoaded(this.imagesLoadedCount)
    .then(() => {
      setTimeout(() => {this.smoothScrollService.scrollTo('.result-container')}, 0);
    });
  }


}
