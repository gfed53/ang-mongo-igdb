import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig } from 'ng2-page-scroll';

import { SingleSearchService } from '../services/single-search.service';
import { SingleGameService } from '../services/single-game.service';
import { SmoothScrollService } from '../services/smooth-scroll.service';


@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
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

  // Single Search section will be obscured 
  relatedInFocus: boolean = false;

  ngOnInit() {
    
    this.singleGameService.singleSearchResults$
    .subscribe(list => {
      this.singleSearchResults = list;
      // Wait a tick
      setTimeout(() => {this.smoothScrollService.scrollDown('#single-result')}, 0);
      this.relatedInFocus = true;
    });

    this.singleGameService.currentGame$
    .subscribe(game => {
      this.selectedResult = game;
    });
  }

  // public scrollDown = this.smoothScrollService.scrollDown;

}
