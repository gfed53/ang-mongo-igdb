import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SingleSearchService } from '../services/single-search.service';
import { SingleGameService } from '../services/single-game.service';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.scss']
})
export class SingleSearchComponent implements OnInit {

  constructor(
    private singleSearchService: SingleSearchService,
    private singleGameService: SingleGameService
  ) { }

  filters: Object = {
    selectedPlatform: null,
    selectedGenre: null
  };

  searchGame(f?: NgForm, filters?): void {
  	console.log('search from search component');
  	console.log('f.value.search', f.value.search);
    let _input: any = f.value.search || 'placeholder';
  	this.singleSearchService.getGame(_input, filters)
  	.subscribe(res => {
      console.log('res', res);
      this.singleGameService.updateSingle(res);
  	});
    // return false;

  }

  ngOnInit() {
    console.log('single-search component onInit');
  }

  onFiltersChange(event){
    console.log('onFiltersChange',event);
    this.filters = event; 
  }

}
