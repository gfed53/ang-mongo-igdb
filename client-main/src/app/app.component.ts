import { Component, Inject, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';


import { RelatedGamesService } from './services/related-games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  relatedResults: any[];
  inModalState: boolean = false;

  constructor(
    private relatedGamesService: RelatedGamesService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { 
    PageScrollConfig.defaultDuration = 750;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  ngOnInit() {
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list) => {
      this.relatedResults = list;
      // Wait a tick
      setTimeout(this.scrollDown.bind(this), 0);
    });
  }

  public scrollDown(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#related-results');
    this.pageScrollService.start(pageScrollInstance);
  }


}
