import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

import { GetPlatformsService } from '../services/get-platforms.service';
import { GetGenresService } from '../services/get-genres.service';
import { UtilitiesService } from '../services/utilities.service';
// import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-single-search-controls',
  templateUrl: './single-search-controls.component.html',
  styleUrls: ['./single-search-controls.component.scss']
})
export class SingleSearchControlsComponent implements OnInit {

  platforms: any[] = [];
  genres: any[];
  selectedPlatform: any;
  selectedGenre: any;

  @Output() onFiltersChange: EventEmitter<any> = new EventEmitter<any>();
  //
  platformsExpanded: boolean;
  genresExpanded: boolean;
  filters: Object;


  constructor(
    private getPlatformsService: GetPlatformsService,
    private getGenresService: GetGenresService,
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit() {
    // Get our list of platforms
    this.getPlatformsService.getPlatforms()
    .subscribe(res => {
      // console.log('res', res);
      let sorted = this.utilitiesService.sortedByName(res.data); 
      this.platforms = this.utilitiesService.postConfig(sorted); 
      // console.log('this.platforms', this.platforms);
      this.selectedPlatform = this.platforms[0];
      this.onChange();
    });
    
    // Get our list of genres
    this.getGenresService.getGenres()
    .subscribe(res => {
      // console.log('res', res);
      let sorted = this.utilitiesService.sortedByName(res.data);
      this.genres = this.utilitiesService.postConfig(sorted);
      // console.log('this.genres', this.genres);
      this.selectedGenre = this.genres[0];
      this.onChange();
    });
  }

  togglePlatforms(){
    this.genresExpanded = false;
    this.platformsExpanded = !this.platformsExpanded;
  }

  toggleGenres(){
    this.platformsExpanded = false;
    this.genresExpanded = !this.genresExpanded;
  }

  updateState(item){
    // If there's no checked property to begin with, set it to true automatically
    // Else, toggle it
    item.checked = item.checked ? true : !item.checked;

    // console.log('platforms now',this.platforms);
    // console.log('genres now',this.genres);
  }

  onPlatformChange(val) {
    console.log('onPlatformChange',val);
  }

  onGenreChange(val) {
    console.log('onGenreChange',val);
  }

  onChange() {
    console.log('onChange');
    this.filters = {
      selectedPlatform: this.selectedPlatform,
      selectedGenre: this.selectedGenre
    }
    this.onFiltersChange.emit(this.filters);
  }

  

}
