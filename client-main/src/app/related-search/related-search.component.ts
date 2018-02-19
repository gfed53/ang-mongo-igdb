import { Component, OnInit, OnChanges, Input } from '@angular/core';

// import { SingleGameService } from '../services/single-game.service';
import { RelatedSearchService } from '../services/related-search.service';
import { RelatedGamesService } from '../services/related-games.service';
import { UtilitiesService } from '../services/utilities.service';

import { MyFilters } from '../types/my-filters';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent {

  @Input() selected: any;
  filters: MyFilters;

  constructor(
    private relatedSearchService: RelatedSearchService,
    private relatedGamesService: RelatedGamesService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnChanges() {
    // console.log('this.selected now', this.selected); // Keep this for now!
  }

  onFiltersChange(event: MyFilters): void {
    console.log('onFiltersChange',event); // Keep this for now!
    this.filters = event;

    // console.log('this.filters now',this.filters);
  }

  searchRelated(game: any, filters?: MyFilters): void {
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
