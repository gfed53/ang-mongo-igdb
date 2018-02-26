import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { RelatedSearchService } from '../services/related-search.service';
import { RelatedGamesService } from '../services/related-games.service';
import { UtilitiesService } from '../services/utilities.service';

import { MyRelatedControls } from '../types/my-related-controls';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent {

  @Input() selected: any;
  filters: MyRelatedControls;

  constructor(
    private relatedSearchService: RelatedSearchService,
    private relatedGamesService: RelatedGamesService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnChanges() {
    // console.log('this.selected now', this.selected); // Keep this for now!
  }

  onFiltersChange(event: MyRelatedControls): void {
    console.log('onFiltersChange',event); // Keep this for now!
    this.filters = event;

    // console.log('this.filters now',this.filters);
  }

  searchRelated(game: any, filters?: MyRelatedControls): void {
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
