import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { GetGameDealService } from '../services/get-game-deal.service';

@Component({
  selector: 'app-game-deal-link',
  templateUrl: './game-deal-link.component.html',
  styleUrls: ['./game-deal-link.component.scss']
})
export class GameDealLinkComponent implements OnInit, AfterViewInit {
  @Input() gameTitle: String;
  @Input() textColor: String;

  constructor(
    private getGameDealService: GetGameDealService
  ) { }

  ngOnInit() {
    // console.log('this.textColor',this.textColor);
  }

  ngAfterViewInit(){
    // console.log('this.textColor',this.textColor);
  }

  getLink(title: string){
    this.getGameDealService.getGameDeal(title)
    .subscribe((data: any) => {
      console.log('data in front end',data);
    });
  }

}
