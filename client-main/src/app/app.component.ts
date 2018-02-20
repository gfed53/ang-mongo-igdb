import { Component, Inject, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';


import { RelatedGamesService } from './services/related-games.service';
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

  constructor(
    private relatedGamesService: RelatedGamesService,
    private smoothScrollService: SmoothScrollService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { 
    PageScrollConfig.defaultDuration = this.smoothScrollService.duration;
    PageScrollConfig.defaultEasingLogic = this.smoothScrollService.easingLogic;
  }

  ngOnInit() {
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list: any[]) => {
      this.relatedResults = list;
      // Wait a tick
      setTimeout(this.scrollDown.bind(this, '#related-results'), 0);
    });
  }

  public scrollDown = this.smoothScrollService.scrollDown;

  // public scrollDown(): void {
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#related-results');
  //   this.pageScrollService.start(pageScrollInstance);
  // }


}
