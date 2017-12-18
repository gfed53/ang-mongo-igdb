import { Component, OnInit } from '@angular/core';

import { GetPlatformsService } from '../services/get-platforms.service';

@Component({
  selector: 'app-single-search-controls',
  templateUrl: './single-search-controls.component.html',
  styleUrls: ['./single-search-controls.component.scss']
})
export class SingleSearchControlsComponent implements OnInit {

  platforms: any[];

  constructor(private getPlatformsService: GetPlatformsService) { }

  ngOnInit() {
    // this.getPlatformsService.getPlatforms()
    // .subscribe(res => {
    //   console.log('res', res);
    //   this.platforms = this.getPlatformsService.sortedByName(res); 
    //   console.log('this.platforms', this.platforms);
  	// });
  }

}
