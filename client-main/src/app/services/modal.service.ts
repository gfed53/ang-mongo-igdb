import { Injectable } from '@angular/core';

import * as _ from 'underscore';

import { Observable } from 'rxjs/Observable.js';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// Service used to manage modal state.
@Injectable()
export class ModalService {
  constructor(){}
  
  private modals: any[] = [];
  
  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      let modalToRemove = _.findWhere(this.modals, { id: id });
      this.modals = _.without(this.modals, modalToRemove);
  }

  open(id: string) {
      console.log('this.modals',this.modals);
      // open modal specified by id
      let modal = _.findWhere(this.modals, { id: id });
      console.log('modal',modal);
      modal.open();
  }

  close(id: string) {
      // close modal specified by id
      let modal = _.find(this.modals, { id: id });
      modal.close();
  }

}