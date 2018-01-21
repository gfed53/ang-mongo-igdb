import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-related-results',
  templateUrl: './related-results.component.html',
  styleUrls: ['./related-results.component.scss']
})
export class RelatedResultsComponent implements OnInit {

  @Input() relatedResults: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
