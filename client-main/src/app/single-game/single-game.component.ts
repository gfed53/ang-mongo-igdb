import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {
  

  constructor(private searchService: SearchService) { 
  }

  singleSearchResults: any[];

  ngOnInit() {
    this.searchService.singleSearchResults$
    .subscribe(list => {
      console.log('in subscribe, list',list);
      this.singleSearchResults = list;
    });
  }

}
