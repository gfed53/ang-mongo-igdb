import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig } from 'ng2-page-scroll';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import { SingleSearchService } from '../services/single-search.service';
import { SingleGameService } from '../services/single-game.service';
import { SmoothScrollService } from '../services/smooth-scroll.service';


@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss'],
  // TODO: with all animations, store animations array in service and reference ones we need so we don't repeat so much? Maybe call it animationsCollection in service.
  animations: [
    trigger('fadeSlideInOut', [
      transition('void => *', [
        style({transform: 'translateX(-2em)', opacity: 0}),
        animate(200, style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(-2em)', opacity: 0}))
      ])
    ])
  ],
})
export class SingleGameComponent implements OnInit {
  

  constructor(
    private singleGameService: SingleGameService,
    private smoothScrollService: SmoothScrollService
  ) { 
    PageScrollConfig.defaultDuration = this.smoothScrollService.duration;
    PageScrollConfig.defaultEasingLogic = this.smoothScrollService.easingLogic;
  }

  singleSearchResults: any[];
  selectedResult: any;

  //---------- Single Search section will be obscured 
  relatedInFocus: boolean = false;

  ngOnInit() {
    
    this.singleGameService.singleSearchResults$
    .subscribe(list => {
      this.singleSearchResults = list;
      //---------- Auto scroll(wait a tick)
      setTimeout(() => {this.smoothScrollService.scrollTo('#single-result')}, 0);
      this.relatedInFocus = true;
    });

    this.singleGameService.currentGame$
    .subscribe(game => {
      this.selectedResult = game;
    });
  }

  handleFocusChange(event) {
    console.log('handleFocusChange');
    this.relatedInFocus = event;
    //---------- Auto scroll(wait a tick)
    setTimeout(() => {this.smoothScrollService.scrollTo('.single-search-outer-container')}, 0);
    

  }
}
