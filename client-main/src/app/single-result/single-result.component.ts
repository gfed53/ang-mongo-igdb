import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { SingleGameService } from '../services/single-game.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() results: any[];

  currentIndex: number = 0;
  currentResult: any;

  // showImages: boolean = false;
  imagesLoaded: boolean = false;
  

  constructor(private singleGameService: SingleGameService) { }

  ngOnInit() {
    this.currentResult = this.results[this.currentIndex];
  }

  ngOnChanges() {
    // Reset
    this.currentIndex = 0;
    this.imagesLoaded = false;
    
    this.currentResult = this.results[this.currentIndex];
  }

  toggleGame(dir) {
    if(dir === 'prev'){
      this.currentIndex = Math.abs(this.currentIndex - 1 + this.results.length) % this.results.length;
    }

    if(dir === 'next'){
      this.currentIndex = Math.abs(this.currentIndex + 1 + this.results.length) % this.results.length;
    }

    this.imagesLoaded = false;
    
    this.currentResult = this.results[this.currentIndex];

    // Update observable
    this.singleGameService.updateGame(this.currentResult);
  }

  onCoverImageLoad(item) {
    item = true;
    console.log('this.imagesLoaded',this.imagesLoaded);
  }

  onScreenImageLoad(item){

  }

  onImageLoad(item, type){
    if(type === 'screenshot'){
      item.screenshots.loaded = true;
    } else if(type === 'cover'){
      item.cover.loaded = true;
    }

    console.log('changed item:',item);
  }
  



}
