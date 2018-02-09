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
      after: '',
      before: ''
    }
  };
  selectedPlatforms = [];
  platformsExpanded: boolean;
  genresExpanded: boolean;
  modalIsOpen: boolean = false;
  checkDateValid: any = this.utilitiesService.checkDateValid;



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

  // checkDateValid(date){
  //   return this.utilitiesService.checkDateValid(date);
  // }

  updateSelectedPlatforms(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;

    this.onChange();
    
    // console.log('this.platforms now',this.platforms);
    // console.log('this.selectedPlatforms',this.selectedPlatforms);
  }

  updateState(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;

    this.onChange();
  }

  onChange() {
    console.log('onChange');

    // Update list of selected platforms
    this.selectedPlatforms = this.utilitiesService.getChecked(this.platforms);


    // We only want array of ids when we make API call, so convert.
    this.filters.selectedPlatformIDs = this.utilitiesService.getIds(this.selectedPlatforms);

    // console.log('this.filters',this.filters);
    this.onFiltersChange.emit(this.filters);
  }



}
