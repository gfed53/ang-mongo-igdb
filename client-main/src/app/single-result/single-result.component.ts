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

  currentResult: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentResult = this.results[0];
  }

}
