import { Component, Input, OnInit, AfterViewInit, OnChanges } from '@angular/core';

import { GetGameDealService } from '../services/get-game-deal.service';

@Component({
  selector: 'app-game-deal-link',
  templateUrl: './game-deal-link.component.html',
  styleUrls: ['./game-deal-link.component.scss']
})
export class GameDealLinkComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() game: any;
  @Input() textColor: String;

  private _gameDealLink: any;
  private _isFetchingLink: Boolean = false;
  private _isGameAvailable: Boolean;

  constructor(
    private getGameDealService: GetGameDealService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  ngOnChanges() {
    // Reset gameLink since we now have a new game, along with availability indicator
    this._gameDealLink = null;
    this._isGameAvailable = this.getGameDealService.isGameAvailable(this.game.first_release_date);
  }

  getLink(game: any, steamID: string){
    this._isFetchingLink = true;

    // To avoid unnecessary calls, cache the link
    if(!this._gameDealLink){
      this.getGameDealService.getGameDeal(game.name, steamID)
        .subscribe((data: any) => {
          this._gameDealLink = this.getGameDealService.getLink(game, data);
          this._isFetchingLink = false;
        },
        (error) => {
          console.error('CheapShark API error',error);

          // If there's an issue with CheapShark API, we can at least use our fallback method of grabbing a game link.
          // Notice that we're just passing an empty array where data would be. Method should handle this same as if we didn't get any results back.
          // Kind of repetitive, TODO, maybe refactor?
          this._gameDealLink = this.getGameDealService.getLink(game, []);
          this._isFetchingLink = false;
        }
      );
    }
  }

}
