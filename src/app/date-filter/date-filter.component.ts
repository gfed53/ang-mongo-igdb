import { Component, Input, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class DateFilterComponent {

  @Input() date: any;
  @Input() direction: string;
  @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  onChange(newValue) {
    // console.log('newValue',newValue);
    this.date = newValue;
    this.dateChange.emit(newValue);
  }

}