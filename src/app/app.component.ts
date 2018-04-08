import { Component, Inject, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig } from 'ng2-page-scroll';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { RelatedGamesService } from './services/related-games.service';
import { UtilitiesService } from './services/utilities.service';
import { SmoothScrollService } from './services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
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
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  relatedResults: any[];
  inModalState: boolean = false;
  resultsInView: boolean;
  showRelatedResults: boolean;

  constructor(
    private relatedGamesService: RelatedGamesService,
    private utilitiesService: UtilitiesService,
    private smoothScrollService: SmoothScrollService
  ) { 
    PageScrollConfig.defaultDuration = this.smoothScrollService.duration;
    PageScrollConfig.defaultEasingLogic = this.smoothScrollService.easingLogic;
  }

  ngOnInit() {
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list: any[]) => {
      this.relatedResults = list;
      this.showRelatedResults = true;
      //---------- Auto scroll(wait a tick)
      setTimeout(() => {this.smoothScrollService.scrollTo('#related-results')}, 0);
    });
  }

  scrollToTopResult() {
    this.smoothScrollService.scrollTo('#related-results');
  }

  handleAppViewChange(event) {
    setTimeout(() => {this.showRelatedResults = event}, 0);
  }

}
