import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

import { GetPlatformsService } from '../services/get-platforms.service';
import { GetGenresService } from '../services/get-genres.service';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'app-single-search-controls',
  templateUrl: './single-search-controls.component.html',
  styleUrls: ['./single-search-controls.component.scss']
})
export class SingleSearchControlsComponent implements OnInit {

  platforms: any[];
  genres: any[];
  selectedPlatform: any;
  selectedGenre: any;
  filters: Object;

  @Output() onFiltersChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private getPlatformsService: GetPlatformsService,
    private getGenresService: GetGenresService,
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit() {
    // Get our list of platforms
    this.getPlatformsService.getPlatforms()
    .subscribe(res => {
      console.log('res',res);
      let sorted = this.utilitiesService.sortedByName(res.data); 
      this.platforms = this.utilitiesService.postConfig(sorted);
      this.selectedPlatform = this.platforms[0];
      this.onChange();
    });
    
    // Get our list of genres
    this.getGenresService.getGenres()
    .subscribe(res => {
      let sorted = this.utilitiesService.sortedByName(res.data);
      this.genres = this.utilitiesService.postConfig(sorted);
      this.selectedGenre = this.genres[0];
      this.onChange();
    });
  }

  onChange() {
    this.filters = {
      selectedPlatform: this.selectedPlatform,
      selectedGenre: this.selectedGenre
    }
    this.onFiltersChange.emit(this.filters);
  }

}
