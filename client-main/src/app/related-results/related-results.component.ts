import { Component, OnInit, OnChanges, Input } from '@angular/core';

// import { RelatedGamesService } from '../services/related-games.service';

@Component({
  selector: 'app-related-results',
  templateUrl: './related-results.component.html',
  styleUrls: ['./related-results.component.scss']
})
export class RelatedResultsComponent implements OnInit {

  @Input() relatedResults: any;

  constructor(
    // private relatedGamesService: RelatedGamesService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('in component, relatedResults',this.relatedResults);
  }

}
