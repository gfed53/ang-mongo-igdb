import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html',
  styleUrls: ['./related-search.component.scss']
})
export class RelatedSearchComponent implements OnInit {

  @Input() results: any[];

  constructor() { }

  ngOnInit() {
  }

}
