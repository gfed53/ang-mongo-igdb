import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
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
  animations: [
    trigger('fadeSlideInOut', [
      transition('void => *', [
        style({transform: 'translateX(-2em)', opacity: 0}),
        animate('250ms 250ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition('* => void', [
        animate('250ms 250ms ease-in-out', style({transform: 'translateX(-2em)', opacity: 0}))
      ])
    ]),
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
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

  @Output() onAppViewChange: EventEmitter<any> = new EventEmitter<any>();

  singleSearchResults: any[];
  selectedResult: any;

  /*---------- 
    Single search section will be visually obscured and disabled, assuming no zero state.
    If we don't retrieve any results, we still want the transition to take place and display
    the zero state notification, but single search form should NOT be disabled.
  */
  relatedInFocus = {
    status: false,
    zeroState: false
  }

  ngOnInit() {
    
    this.singleGameService.singleSearchResults$
    .subscribe(list => {
      this.singleSearchResults = list;

      // Manage zero state 
      if(!this.singleSearchResults.length) {
        this.relatedInFocus.zeroState = true;
      } else {
        this.relatedInFocus.zeroState = false;
      }

      this.relatedInFocus.status = true;
    });

    this.singleGameService.currentGame$
    .subscribe(game => {
      this.selectedResult = game;
    });
  }

  //---------- Will occur when user chooses to switch base game. TODO rename?
  handleFocusChange(event) {  
    //---------- Auto scroll(wait a tick)
    setTimeout(() => {
      this.smoothScrollService.scrollTo('.header-main'); 
      this.onAppViewChange.emit(event);
    }, 0);

    setTimeout(() => {
      this.relatedInFocus.status = event;
    }, 500);
  }
}
