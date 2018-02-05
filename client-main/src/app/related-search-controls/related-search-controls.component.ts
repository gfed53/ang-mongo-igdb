import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

@Component({
  selector: 'app-related-search-controls',
  templateUrl: './related-search-controls.component.html',
  styleUrls: ['./related-search-controls.component.scss'],
  animations: [
    trigger('fadeInOut', [
      // state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class RelatedSearchControlsComponent implements OnInit {

  @Output() onFiltersChange: EventEmitter<any> = new EventEmitter<any>();

  platforms: any[] = [];
  filters: any = {
    selectedPlatformIDs: [],
    dateRange: {
      // Default date, oldes timestamp we can use?
      // after: '1971-01-01T04:00:00.000Z',
      // We can just have the user input years (yyyy), or keywords (Now, N/A) and then use moment in the backend to convert where need be. Now will obviously just return Date.now(), N/A for 'after' will convert to '1971-01-01T04:00:00.000Z', and any other year inputs will convert to a date timestamp. dates for after will convert like: 1996 -> '1996-01-01T04:00:00.000Z', and before will be like: 1996 -> '1996-12-31T04:00:00.000Z' as to be as inclusive as possible.
      // We can also guard against values that don't fit the criteria, but this should be done in the front end so we can give error notifications before the backend even comes into play.
      after: 'N/A',
      before: 'Now'
    }
  };
  selectedPlatforms = [];
  dateRange = {
    // Default date, oldes timestamp we can use?
    // after: '1971-01-01T04:00:00.000Z',
    // We can just have the user input years (yyyy), or keywords (Now, N/A) and then use moment in the backend to convert where need be. Now will obviously just return Date.now(), N/A for 'after' will convert to '1971-01-01T04:00:00.000Z', and any other year inputs will convert to a date timestamp. dates for after will convert like: 1996 -> '1996-01-01T04:00:00.000Z', and before will be like: 1996 -> '1996-12-31T04:00:00.000Z' as to be as inclusive as possible.
    // We can also guard against values that don't fit the criteria, but this should be done in the front end so we can give error notifications before the backend even comes into play.
    after: 'N/A',
    before: 'Now'
  }
  // selectedPlatformLabels: string[] = [];
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
      // console.log('res', res);
      this.platforms = this.utilitiesService.sortedByName(res.data); 
      // console.log('this.platforms', this.platforms);
    });
  }

  // Passing true will expand. False will collapse.
  togglePlatforms(bool){
      this.platformsExpanded = bool;
      // this.modalsService.updateModalState(bool);
  }

  openModal(id: string){
    // this.modalIsOpen = true;
    this.modalService.open(id);
  }

  closeModal(id: string){
    console.log('');
    // this.modalIsOpen = false;
    this.modalService.close(id);
  }

  onModalChange(bool){
    this.modalIsOpen = bool;
  }

  

  // toggleGenres(){
  //   this.platformsExpanded = false;
  //   this.genresExpanded = !this.genresExpanded;
  // }

  updateSelectedPlatforms(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;

    this.onChange();
    
    // console.log('this.platforms now',this.platforms);
    // console.log('this.selectedPlatforms',this.selectedPlatforms);
  }

  // updateDateFilter(){
  //   this.filters.dateRange = this.dateRange;
  // }

  updateState(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;

    this.onChange();

    // console.log('this.platforms now',this.platforms);
    // console.log('this.selectedPlatforms',this.selectedPlatforms);

    // Update list of selected platforms
    // this.selectedPlatforms = this.utilitiesService.getChecked(this.platforms);

    // We only want array of ids when we make API call, so convert.
    // const selectedPlatformIDs = this.utilitiesService.getIds(this.selectedPlatforms);

    // this.filters.selectedPlatformIDs = {
    //   selectedPlatformIDs
    // };

    
    // this.selectedPlatformLabels = this.utilitiesService.getLabels(selectedPlatforms);

    // console.log('this.filters',this.filters);
    // this.onFiltersChange.emit(this.filters);
    // console.log('genres now',this.genres);
  }

  onChange() {
    console.log('onChange');

    // Update list of selected platforms
    this.selectedPlatforms = this.utilitiesService.getChecked(this.platforms);


    // We only want array of ids when we make API call, so convert.
    this.filters.selectedPlatformIDs = this.utilitiesService.getIds(this.selectedPlatforms);

    
    // this.selectedPlatformLabels = this.utilitiesService.getLabels(selectedPlatforms);

    // console.log('this.filters',this.filters);
    this.onFiltersChange.emit(this.filters);
  }



}
