import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';
import { RelatedSearchService } from '../services/related-search.service';
import { RelatedGamesService } from '../services/related-games.service';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent implements OnInit {

  @Input() selected: any;
  // selectedResult: any;
  filters: any;

  constructor(
    private singleGameService: SingleGameService,
    private relatedSearchService: RelatedSearchService,
    private relatedGamesService: RelatedGamesService
  ) { }

  ngOnInit() {

    // this.singleGameService.singleSearchResults$
    // .subscribe(results => {
    //   console.log('results',results);
    //   this.results = results;
    //   this.selectedResult = this.results[0];
    //   console.log('this.selectedResult, after new game',this.selectedResult);
    // });

    // Subscribe to game update
    // this.singleGameService.currentGame$
    // .subscribe(game => {
    //   console.log('game now',game);
    //   this.selectedResult = game;
    //   console.log('this.selectedResult',this.selectedResult);
    // });
  }

  ngOnChanges() {
    console.log('this.selected now', this.selected);
  }

  onFiltersChange(event){
    console.log('onFiltersChange',event);
    this.filters = event; 
  }

  searchRelated(game, filters?): void {
    console.log('game',game); // Keep this for now!
    console.log('filters',filters); // Keep this for now!
    this.relatedSearchService.getRelated(game,filters)
    .subscribe(res => {
      console.log('res',res); // Keep this for now!
      this.relatedGamesService.updateResults(res);
    });


  }

}
