import { Component, Input } from '@angular/core';

import { GetGameDealService } from '../services/get-game-deal.service';

@Component({
  selector: 'app-game-deal-link',
  templateUrl: './game-deal-link.component.html',
  styleUrls: ['./game-deal-link.component.scss']
})
export class GameDealLinkComponent {
  @Input() gameTitle: String;

  constructor(
    private getGameDealService: GetGameDealService
  ) { }

  getLink(title: string){
    this.getGameDealService.getGameDeal(title)
    .subscribe((data: any) => {
      console.log('data in front end',data);
    });
  }

}
