import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { GetPlatformsService } from '../services/get-platforms.service';
import { GetGenresService } from '../services/get-genres.service';
import { UtilitiesService } from '../services/utilities.service';
import { ModalService } from '../services/modal.service';

import { MyRelatedControls } from '../types/my-related-controls';

@Component({
  selector: 'app-related-search-controls',
  templateUrl: './related-search-controls.component.html',
  styleUrls: ['./related-search-controls.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class RelatedSearchControlsComponent implements OnInit {

  // View doesn't update properly when using this input variable.
  // @Input() maxYear: number;

  @Output() onControlsChange: EventEmitter<any> = new EventEmitter<any>();

  platforms: any[] = [];

  minYear: number = 1950;

  // Can't bind, else max will dynamically change!
  retrievedMaxYear: number = new Date().getFullYear() + 2;
  maxYear: number = this.retrievedMaxYear;

  controls: MyRelatedControls = {
    selectedPlatformIDs: [],
    dateRange: [this.minYear,this.maxYear],
    // dateRange: [],
    order: 'popularity'
  };
  orderChoices = [
    {
      value: 'popularity',
      label: 'The Most Popular'
    },
    {
      value: 'rating',
      label: 'The Highest Rated'
    },
    {
      value: '', // null
      label: 'I Don\'t Care'
    }
  ];

  dateAfter: number = this.minYear;
  dateBefore: number = this.maxYear;

  selectedPlatforms = [];
  platformsExpanded: boolean;
  genresExpanded: boolean;
  modalIsOpen: boolean = false;

  constructor(
    private getPlatformsService: GetPlatformsService,
    private getGenresService: GetGenresService,
    private utilitiesService: UtilitiesService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    // Get our list of platforms
    this.getPlatformsService.getPlatforms()
    .subscribe(res => {
      this.platforms = this.utilitiesService.sortedByName(res.data);
    });

    // console.log('this.maxYear',this.maxYear);
    // console.log('this.controls.dateRange',this.controls.dateRange);

    // setTimeout(() => {this.controls.dateRange = [this.minYear,this.maxYear]; },0);
    

    // console.log('this.controls.dateRange',this.controls.dateRange);


  }

  openModal(id: string){
    this.modalService.open(id);
    // Set focus
    document.getElementById('text-platform-search').focus();

  }

  closeModal(id: string){
    this.modalService.close(id);
    // Reset focus
    // document.getElementById('platform-btn').focus();
  }

  onModalChange(bool){
    this.modalIsOpen = bool;
  }

  updateSelectedPlatforms(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;
    this.onChange();
  }

  onChange() {
    // Update list of selected platforms
    this.selectedPlatforms = this.utilitiesService.getChecked(this.platforms);

    // We only want array of ids when we make API call, so convert.
    this.controls.selectedPlatformIDs = this.utilitiesService.getArrayOfIds(this.selectedPlatforms);

    this.onControlsChange.emit(this.controls);
  }

  dateChange(event: any): void {
    // console.log('dateChange');

    // Testing manual two-way binding of number input variables
    this.dateAfter = this.controls.dateRange[0];
    this.dateBefore = this.controls.dateRange[1];

    this.onControlsChange.emit(this.controls);
  }

  dateAfterChange(event: any): void {

    // let afterVal = this.controls.dateRange[0],
    //     beforeVal = this.controls.dateRange[1];
    
    // console.log('afterVal',afterVal);
    // console.log('beforeVal',beforeVal);

    // Only update value if it's valid on our terms. Testing for now.
    // let afterVal = (event <= this.controls.dateRange[1]) ? event : this.controls.dateRange[0];

    let afterVal = event;
    // console.log('afterVal',afterVal);

    
    // setTimeout(() => {this.dateAfter = afterVal;}, 0);

    // console.log('event',event);
    // console.log('this.controls.dateRange[1]',this.controls.dateRange[1]);
    this.controls.dateRange = [afterVal, this.controls.dateRange[1]];
    // console.log('this.controls.dateRange now',this.controls.dateRange);
    this.onControlsChange.emit(this.controls);
  }

  dateBeforeChange(event: any): void {

    // Only update value if it's valid on our terms. Testing for now.
    // let beforeVal = (event >= this.controls.dateRange[0]) ? event : this.controls.dateRange[1];

    let beforeVal = event;

    // console.log('beforeVal',beforeVal);

    // setTimeout(() => {this.dateBefore = beforeVal; }, 0); 

    this.controls.dateRange = [this.controls.dateRange[0], beforeVal];

    // console.log('this.controls.dateRange now',this.controls.dateRange);
    this.onControlsChange.emit(this.controls);
  }

}
