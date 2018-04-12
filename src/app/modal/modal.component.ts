import { Component, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
 
import { ModalService } from '../services/modal.service';
import { TabAccessService } from '../services/tab-access.service';
 
@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>',
    styleUrls: ['./modal.component.scss']
})
 
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
    private element: JQuery;
 
    constructor(
        private modalService: ModalService, 
        private el: ElementRef,
        private tabAccessService: TabAccessService
    ) {
        this.element = $(el.nativeElement);
    }

    // focusableEls: any;
 
    ngOnInit(): void {
        let modal = this;
 
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
 
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
 
        // close modal on background click
        this.element.on('click', function (e: any) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
 
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
 
    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }
 
    // open modal
    open(): void {
        const tabAccessService = this.tabAccessService;
        const self = this;
            // close = this.close;
        this.element.show(200);
        this.onChange.emit(true);
        $('body').addClass('modal-open');

        tabAccessService.setFocusBoundary(this.element, () => {
            this.close();
        });
    }
 
    // close modal
    close(): void {
        this.onChange.emit(false);
        this.element.hide(200);
        $('body').removeClass('modal-open');
    }
}