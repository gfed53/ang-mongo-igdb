import { Component, OnInit } from '@angular/core';

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

  constructor(
    private getPlatformsService: GetPlatformsService,
    private getGenresService: GetGenresService,
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit() {
    // Get our list of platforms
    this.getPlatformsService.getPlatforms()
    .subscribe(res => {
      console.log('res', res);
      this.platforms = this.utilitiesService.sortedByName(res.data); 
      console.log('this.platforms', this.platforms);
    });
    
    // Get our list of genres
    this.getGenresService.getGenres()
    .subscribe(res => {
      console.log('res', res);
      this.platforms = this.utilitiesService.sortedByName(res.data); 
      console.log('this.genres', this.platforms);
    });
  }

}
