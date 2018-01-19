import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service used to store games related to our initially searched game.
@Injectable()
export class ModalsService {
	constructor(){}

	private modalStateSource = new Subject<any>();
	modalState$ = this.modalStateSource.asObservable();

	updateModalState(bool: boolean): void {
		console.log('bool',bool);
		this.modalStateSource.next(bool);
  }


	

}