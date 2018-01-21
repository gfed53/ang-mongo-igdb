import { Component, OnInit } from '@angular/core';

import { SingleSearchService } from '../services/single-search.service';
import { SingleGameService } from '../services/single-game.service';


@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {
  

  constructor(private singleGameService: SingleGameService) { 
  }

  singleSearchResults: any[];
  selectedResult: any;

  ngOnInit() {
    
    this.singleGameService.singleSearchResults$
    .subscribe(list => {
      this.singleSearchResults = list;
    });

    this.singleGameService.currentGame$
    .subscribe(game => {
      this.selectedResult = game;
    });
  }

}
