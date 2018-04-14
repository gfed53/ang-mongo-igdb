import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SingleSearchService } from '../services/single-search.service';
import { SingleGameService } from '../services/single-game.service';
import { TabAccessService } from '../services/tab-access.service';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.scss']
})
export class SingleSearchComponent {

  constructor(
    private singleSearchService: SingleSearchService,
    private singleGameService: SingleGameService,
    private tabAccessService: TabAccessService
  ) { }

  q: string;

  filters: Object = {
    selectedPlatform: null,
    selectedGenre: null
  };

  singleSearchDisabled = this.tabAccessService.singleSearchDisabled;
  
  ngOnInit() {
    setTimeout(() => { document.getElementById('single-search-input').focus(); } , 0);
  }

  searchGame(q?: string, filters?): void {
    let _input: any = q || 'placeholder';
  	this.singleSearchService.getGame(_input, filters)
  	.subscribe(res => {
      //---------- Reset to first game
      this.singleGameService.updateResults(res);
      this.singleGameService.updateGame(res[0]);

      // Only if we actually get results do we make view updates
      if(res.length){
        this.q = '';
        document.getElementById('single-search-input').blur();
        this.tabAccessService.setSingleSearchDisabled(true);
      }

    });
  }

  onFiltersChange(event){
    this.filters = event; 
  }

}
