import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { GetGameDealService } from '../services/get-game-deal.service';

@Component({
  selector: 'app-game-deal-link',
  templateUrl: './game-deal-link.component.html',
  styleUrls: ['./game-deal-link.component.scss']
})
export class GameDealLinkComponent implements OnInit, AfterViewInit {

  @Input() game: any;
  @Input() textColor: String;

  private _gameDealLink: any;
  private _isFetchingLink: Boolean = false;

  constructor(
    private getGameDealService: GetGameDealService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
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
