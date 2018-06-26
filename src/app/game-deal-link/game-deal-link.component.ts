import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { GetGameDealService } from '../services/get-game-deal.service';

@Component({
  selector: 'app-game-deal-link',
  templateUrl: './game-deal-link.component.html',
  styleUrls: ['./game-deal-link.component.scss']
})
export class GameDealLinkComponent implements OnInit, AfterViewInit {

  // TODO: probably send whole game object instead of just title as input since we're gonna need other stuff
  // @Input() gameTitle: String;
  @Input() game: any;
  @Input() textColor: String;

  // http://www.cheapshark.com/redirect?dealID={id}
  private _gameDealLink: any;
  private _isFetchingLink: Boolean = false;

  constructor(
    private getGameDealService: GetGameDealService
  ) { }

  ngOnInit() {
    // console.log('this.textColor',this.textColor);
    console.log('this.game',this.game);
  }

  ngAfterViewInit(){
    // console.log('this.textColor',this.textColor);
  }

  getLink(game: any, steamID: string){
    this._isFetchingLink = true;

    // To avoid unnecessary calls, cache the link
    if(!this._gameDealLink){
      this.getGameDealService.getGameDeal(game.name, steamID)
        .subscribe((data: any) => {
          // TODO: Need error handling in case we don't get any results back.
          console.log('data in front end',data);

          // const deal = data[0];
          // const id = deal.cheapestDealID;

          // this._gameDealLink = `http://www.cheapshark.com/redirect?dealID=${id}`;
          this._gameDealLink = this.getGameDealService.getLink(game, data);
          console.log('this._gameDealLink',this._gameDealLink);
          this._isFetchingLink = false;

          
        },
        (error) => {
          console.log('error',error);
        }
      );
    } else {
      // window.open(this._gameDealLink, '_blank');
    }

    
  }

}
