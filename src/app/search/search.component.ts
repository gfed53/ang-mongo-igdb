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

  searchGame(f?: NgForm): void {
  	console.log('search from search component');
  	console.log('f.value.search', f.value.search);
    let _input: any = f.value.search || 'placeholder';
  	this.searchService.getGames(_input)
  	.subscribe(res => {
  		console.log('res', res);
  	});
    // return false;

  }

  ngOnInit() {
  	console.log('search component onInit');
  }

}
