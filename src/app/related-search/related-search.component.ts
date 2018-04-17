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
    this.isFormValid = this.checkFormValid();
    // console.log('this.controls',this.controls);

  }

  onSwitchGame(){
    this.onFocusChange.emit(false);
  }

  // Probably should move this to utilities service. Bizniz logic
  checkFormValid(){
    // Just checking dates for now since that's the one item that could be invalid

    // let dateAfter = this.controls.dateRange[0];
    // let dateBefore = this.controls.dateRange[1];

    let [dateAfter, dateBefore] = this.controls.dateRange;

    let isDateAfterValid = dateAfter ?
    (dateAfter >= 1950 && 
    (dateBefore ? dateAfter <= dateBefore : true)) :
    true;

    let isDateBeforeValid = dateBefore ?
    // Hardcoded 2020 for now, maybe create prop in this component and pass down to controls component
    // Also only need to check overlap once (which we do in isDateAfterValid). No need to check twice, right?
    dateBefore <= 2020 : true;

    return isDateAfterValid && isDateBeforeValid;
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
