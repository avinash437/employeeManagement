import { Component, ElementRef, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ModalService } from './modal.service';

@Component({
    selector: 'jw-modal',
    template: 
        `<div class="jw-modal">
            <div class="jw-modal-body">
                <ng-content></ng-content>
            </div>
        </div>
        <div class="jw-modal-background"></div>`
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef, @Inject(DOCUMENT) document) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        this.construct();
    }
    construct(){
        let modal = this;
        let element = document.getElementById('custom-modal');
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(element);

        // close modal on background click
        element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        //this.modalService.add(this);
    }
    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        let element = document.getElementById('custom-modal');
        //this.modalService.remove();
        element.remove();
    }

    // open modal
    open(): void {
        let element = document.getElementById('custom-modal');
        element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        let element = document.getElementById('custom-modal');
        element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}