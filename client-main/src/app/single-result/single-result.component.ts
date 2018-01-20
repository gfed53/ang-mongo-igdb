import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() results: any[];

  currentIndex: number = 0;
  currentResult: any;
  

  constructor(private singleGameService: SingleGameService) { }

  ngOnInit() {
    this.currentResult = this.results[this.currentIndex];
  }

  ngOnChanges() {
    // Reset
    this.currentIndex = 0;
    this.currentResult = this.results[this.currentIndex];
  }

  toggleGame(dir) {
    if(dir === 'prev'){
      this.currentIndex = Math.abs(this.currentIndex - 1 + this.results.length) % this.results.length;
    }

    if(dir === 'next'){
      this.currentIndex = Math.abs(this.currentIndex + 1 + this.results.length) % this.results.length;
    }
    
    this.currentResult = this.results[this.currentIndex];

    // Update observable
    this.singleGameService.updateGame(this.currentResult);
  }
  



}
