import { Component, Inject, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig } from 'ng2-page-scroll';

import { RelatedGamesService } from './services/related-games.service';
import { UtilitiesService } from './services/utilities.service';
import { SmoothScrollService } from './services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  relatedResults: any[];
  inModalState: boolean = false;
  resultsInView: boolean;

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
      //---------- Auto scroll(wait a tick)
      setTimeout(() => {this.smoothScrollService.scrollTo('#related-results')}, 0);
    });
  }

  scrollToTopResult() {
    this.smoothScrollService.scrollTo('#related-results');
  }

}
