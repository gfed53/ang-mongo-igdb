import { Injectable } from '@angular/core';

@Injectable()
export class TabAccessService {
  constructor(){}

  singleSearchDisabled = {
    value: false
  }

  setSingleSearchDisabled(bool: boolean) {
    this.singleSearchDisabled.value = bool;
  }

  setFocusBoundary(parentEl, onRevert) {
    let element = parentEl[0],
    focusableEls = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');

    parentEl.on('keydown', (e) => {
      this.handleKeyDown(focusableEls, e, onRevert);
    });
  }

  handleKeyDown(focusableEls, e, closeCB) {

    let KEY_TAB = 9,
        KEY_ESC = 27,
        firstFocusableEl = focusableEls[0],
        lastFocusableEl = focusableEls[focusableEls.length - 1];
  
    function handleBackwardTab() {
      if ( document.activeElement === firstFocusableEl ) {
        e.preventDefault();
        lastFocusableEl.focus();
      }
    }
    function handleForwardTab() {
      if ( document.activeElement === lastFocusableEl ) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
    }
  
    switch(e.keyCode) {
      case KEY_TAB:
        if ( focusableEls.length === 1 ) {
          e.preventDefault();
          break;
        } 
  
        if ( e.shiftKey ) {
          handleBackwardTab();
        } else {
          handleForwardTab();
        }
      
        break;

      case KEY_ESC:
      // Should KEY_ENTER close modal too?
        closeCB();
        break;
        
      default:
        break;
    } // end switch
  }
}