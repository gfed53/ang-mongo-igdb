import { Injectable } from '@angular/core';

@Injectable()
export class TabAccessService {
  constructor(){}

  // singleSearchDisabled: boolean = false;

  singleSearchDisabled = {
    value: false
  }


  setFocusBoundary(parentEl, onRevert) {
    let element = parentEl[0],
    focusableEls = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');

    parentEl.on('keydown', (e) => {
      // e.preventDefault();
      // console.log('this',this);
      // console.log('self',self);
      this.handleKeyDown(focusableEls, e, onRevert);
    });
  }

  setSingleSearchDisabled(bool: boolean) {
    this.singleSearchDisabled.value = bool;
  }

  // For single search disabling/enabling, maybe we can make a function that toggles whether the inputs of a parent element are disabled or enabled (instead of like setFocusBoundary function).
  // Or, instead of bothering with ElementRef, we can try to do it a more Angular way and control when said input elements should be disabled.

  // getFocusableElements(parentEl) {


  //   console.log('parentEl[0]',parentEl[0]);

  //   let element = parentEl[0];

  //   let focusableEls = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    
  //   // let focusableEls = $parentEl.children('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
  //   // let focusableEls = $parentEl.children('input:not([disabled])');

  //   // console.log('focusableEls',focusableEls);

  //   return Array.prototype.slice.call(focusableEls);
  // }

  handleKeyDown(focusableEls, e, closeCB) {
    // console.log('this in handleKeyDown',this);
    // var Dialog = this;

    // console.log('focusableEls',focusableEls);

    let KEY_TAB = 9,
        KEY_ESC = 27,
        firstFocusableEl = focusableEls[0],
        lastFocusableEl = focusableEls[focusableEls.length - 1];

        // console.log('firstFocusableEl',firstFocusableEl);
        // console.log('lastFocusableEl',lastFocusableEl);
  
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
        closeCB();
        break;
        
      default:
        break;
    } // end switch
  }
}