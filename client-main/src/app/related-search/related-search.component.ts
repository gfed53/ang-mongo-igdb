import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';
import { RelatedSearchService } from '../services/related-search.service';
import { RelatedGamesService } from '../services/related-games.service';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent {

  @Input() selected: any;
  filters: any;

  constructor(
    private singleGameService: SingleGameService,
    private relatedSearchService: RelatedSearchService,
    private relatedGamesService: RelatedGamesService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnChanges() {
    console.log('this.selected now', this.selected); // Keep this for now!
  }

  onFiltersChange(event){
    console.log('onFiltersChange',event); // Keep this for now!
    this.filters = event; 
  }

  searchRelated(game, filters?): void {
    console.log('game',game); // Keep this for now!
    console.log('filters',filters); // Keep this for now!
    this.relatedSearchService.getRelated(game,filters)
    .subscribe(res => {
      res = this.utilitiesService.setImageLinks(res);
      console.log('res',res); // Keep this for now!
      this.relatedGamesService.updateResults(res);
    });


  }

}
