import { Component, OnInit, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent implements OnInit {

  @Input() results: any[];
  selectedResult: any;

  constructor(private singleGameService: SingleGameService) { }

  ngOnInit() {
    this.selectedResult = this.results[0];
    console.log('this.selectedResult',this.selectedResult);


    // Subscribe to index update
    this.singleGameService.currentGameIndex$
    .subscribe(i => {
      console.log('i now',i);
      this.selectedResult = this.results[i];
      console.log('this.selectedResult',this.selectedResult);
    });
  }

}
