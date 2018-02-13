import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';


@Component({
  selector: 'app-related-results',
  templateUrl: './related-results.component.html',
  styleUrls: ['./related-results.component.scss']
})
export class RelatedResultsComponent implements OnInit {

  @Input() relatedResults: any;

  constructor(
    private singleGameService: SingleGameService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  // For game item, sets value on item object indicating that image has been loaded
  onImageLoad(item) {
    item.imageLoaded = true;
  }

  // Use a related search result as the basis 
  updateSingleResult(item){
    let a = [item];
    this.singleGameService.updateResults(a);
  }

}
