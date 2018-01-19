import { Component, Inject, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';


import { RelatedGamesService } from './services/related-games.service';
// import { ModalsService } from './services/modals.service';

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
    @Inject(DOCUMENT) private document: any,
    // private modalsService: ModalsService
  ) { 
    PageScrollConfig.defaultDuration = 750;
  }

  ngOnInit() {
    // console.log('this.pageScrollService',this.pageScrollService);
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list) => {
      this.relatedResults = list;
      console.log('this.relatedResults',this.relatedResults);
      // Wait a tick
      setTimeout(this.scrollDown.bind(this), 0);
    });

    // this.modalsService.modalState$
    // .subscribe(bool => {
    //   this.inModalState = bool;
    // });
  }

  public scrollDown(): void {
    // console.log('scrollDown running');
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#related-results');
    // console.log('pageScrollInstance',pageScrollInstance);
    // console.log('this.pageScrollService',this.pageScrollService);
    this.pageScrollService.start(pageScrollInstance);
  }


}
