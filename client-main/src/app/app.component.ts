import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

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
    private relatedGamesService: RelatedGamesService
  ) { }

  ngOnInit() {
    this.relatedGamesService.relatedSearchResults$
    .subscribe((list) => {
      this.relatedResults = list;
      console.log('this.relatedResults',this.relatedResults);
    });
  }


}
