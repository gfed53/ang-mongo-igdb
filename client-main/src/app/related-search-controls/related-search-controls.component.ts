import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GetPlatformsService } from '../services/get-platforms.service';
import { GetGenresService } from '../services/get-genres.service';
import { UtilitiesService } from '../services/utilities.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-related-search-controls',
  templateUrl: './related-search-controls.component.html',
  styleUrls: ['./related-search-controls.component.scss']
})
export class RelatedSearchControlsComponent implements OnInit {

  @Output() onFiltersChange: EventEmitter<any> = new EventEmitter<any>();

  // Originally copied over content from single-search component since most of this will be used.

  platforms: any[] = [];
  filters: any;
  selectedPlatformLabels: string[] = [];
  platformsExpanded: boolean;
  genresExpanded: boolean;


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
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

  

  // toggleGenres(){
  //   this.platformsExpanded = false;
  //   this.genresExpanded = !this.genresExpanded;
  // }

  updateState(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? !item.checked : true;

    // console.log('platforms now',this.platforms);

    const selectedPlatforms = this.utilitiesService.getChecked(this.platforms);
    this.filters = {
      selectedPlatforms
    };

    this.selectedPlatformLabels = this.utilitiesService.getCheckedLabels(this.platforms);

    console.log('this.filters',this.filters);
    this.onFiltersChange.emit(this.filters);
    // console.log('genres now',this.genres);
  }

  onChange() {
    // console.log('onChange');
    const selectedPlatforms = this.utilitiesService.getChecked(this.platforms);
    this.filters = {
      selectedPlatforms
    }
    this.onFiltersChange.emit(this.filters);
  }



}
