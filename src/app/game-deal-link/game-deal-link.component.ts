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
    
    // console.log('game',this.game);
    // console.log('first_release_date',this.game.first_release_date);

    // Reset gameLink since we now have a new game, along with availability indicator
    this._gameDealLink = null;
    this._isGameAvailable = this.getGameDealService.isGameAvailable(this.game.first_release_date);
    // console.log('this._isGameAvailable',this._isGameAvailable);
  }

  getLink(game: any, steamID: string){
    this._isFetchingLink = true;

    // To avoid unnecessary calls, cache the link
    if(!this._gameDealLink){
      this.getGameDealService.getGameDeal(game.name, steamID)
        .subscribe((data: any) => {
          // TODO: Need error handling in case we don't get any results back.
          
          this._gameDealLink = this.getGameDealService.getLink(game, data);
          this._isFetchingLink = false;    
        },
        (error) => {
          console.error('error',error);
        }
      );
    }
  }

}
