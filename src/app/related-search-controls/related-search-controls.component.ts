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
  ]
})
export class RelatedSearchControlsComponent implements OnInit {

  @Output() onControlsChange: EventEmitter<any> = new EventEmitter<any>();

  platforms: any[] = [];
  controls: MyRelatedControls = {
    selectedPlatformIDs: [],
    // TODO: 2020 hardcoded for now while testing, dynamically generate year two years from now.
    dateRange: [1950,2020],
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
  selectedPlatforms = [];
  platformsExpanded: boolean;
  genresExpanded: boolean;
  modalIsOpen: boolean = false;

  currentYear: number = new Date().getFullYear() + 1;

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
  }

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
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

    console.log('this.selectedPlatforms',this.selectedPlatforms);


    // We only want array of ids when we make API call, so convert.
    this.controls.selectedPlatformIDs = this.utilitiesService.getIds(this.selectedPlatforms);

    this.onControlsChange.emit(this.controls);
  }

  dateChange(event: any): void {
    this.onControlsChange.emit(this.controls);
  }



}
