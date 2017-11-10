import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchVideo(f: NgForm): void {
  	console.log('searchVideo from search component');
  	console.log('q', f.value.search);
  	this.searchService.getVideos(f.value.search)
  	.subscribe(res => {
  		console.log('res', res);
  	});

  }

  ngOnInit() {
  	console.log('search component on init');
  }

}
