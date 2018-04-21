import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { RelatedSearchService } from '../services/related-search.service';
import { RelatedGamesService } from '../services/related-games.service';
import { UtilitiesService } from '../services/utilities.service';

import { MyRelatedControls } from '../types/my-related-controls';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent {

  @Input() selected: any;
  @Input() inFocus: boolean;

  @Output() onFocusChange: EventEmitter<any> = new EventEmitter<any>();

  isFormValid: boolean = true;

  controls: MyRelatedControls = {
    selectedPlatformIDs: [],
    order: 'popularity',
    dateRange: []
  };

  // Can't bind, else max will dynamically change!
  retrievedMaxYear: number = new Date().getFullYear() + 2;
  maxYear: number = this.retrievedMaxYear;

  constructor(
    private relatedSearchService: RelatedSearchService,
    private relatedGamesService: RelatedGamesService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnChanges() {
    // console.log('this.selected now', this.selected); // Keep this for now!
  }

  onControlsChange(event: MyRelatedControls): void {
    // console.log('onControlsChange',event); // Keep this for now!
    this.controls = event;
    this.isFormValid = this.utilitiesService.checkRelatedFormValid(this.controls.dateRange, this.maxYear);
  }

  onSwitchGame(){
    this.onFocusChange.emit(false);
  }

  searchRelated(game: any, controls?: MyRelatedControls): void {
    // console.log('game',game); // Keep this for now!
    // console.log('controls',controls); // Keep this for now!
    this.relatedSearchService.getRelated(game,controls)
    .subscribe(res => {
      res = this.utilitiesService.setImageLinks(res);
      // console.log('res',res); // Keep this for now!
      this.relatedGamesService.updateResults(res);
    });


  }

}
