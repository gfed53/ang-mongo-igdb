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

  platforms: any[] = [
    {
      name: 'Test'
    }
  ];
  genres: any[];

  //
  platformsExpanded: boolean;
  genresExpanded: boolean;


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
      this.genres = this.utilitiesService.sortedByName(res.data); 
      console.log('this.genres', this.genres);
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

}
