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
  relatedResults = [];

  constructor(
    private relatedGamesService: RelatedGamesService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list) => {
      this.relatedResults = list;
      console.log('this.relatedResults',this.relatedResults);
      // Wait a tick
      setTimeout(this.scrollDown, 0);
    });
  }

  scrollDown(): void {
    console.log('scrollDown running');
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#related-results');
    // this.pageScrollService.start(pageScrollInstance);
  }


}
