import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'GameHunter';
  sub = 'Gregory Federico';
  year = '2017-2018';

  constructor() { }

  ngOnInit() {
  }

}
