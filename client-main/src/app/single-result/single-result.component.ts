import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SearchService } from '../services/search.service';
// import {  } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() results: any[];

  currentIndex: number = 0;
  currentResult: any;
  // hasNext: boolean;
  // hasPrev: boolean;
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentResult = this.results[this.currentIndex];
  }

  // hasNext(): boolean {

  // };

  goNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.results.length;
    this.currentResult = this.results[this.currentIndex];
  }

  goPrev(): void {
    //TODO: fix, won't work w/o absolute values
    this.currentIndex = (this.currentIndex - 1) % this.results.length;
    this.currentResult = this.results[this.currentIndex];
  }
  



}
