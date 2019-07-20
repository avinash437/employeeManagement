import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {

    openLoadingModal(): void {
        let element = document.getElementById('custom-modal');
        /* let message = document.getElementById('message');
         message.innerHTML = 'Loading ...';*/
        element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    closeLoadingModal(): void {
        setTimeout(function () {
            let element = document.getElementById('custom-modal');
            element.style.display = 'none';
            document.body.classList.remove('jw-modal-open');
        }, 1500);
    }
    openModal(failMessgae): void {
        let that = this;
        let element = document.getElementById('message-modal');
        let message = document.getElementById('message');
        message.innerHTML = failMessgae;
        element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
        setTimeout(function () {
            that.close(true);
        }, 1500);
    }
    // close modal
    close(state): void {
        setTimeout(function () {
            let id = 'custom-modal';
            if (state) {
                id = 'message-modal';
            }
            let element = document.getElementById(id);
            element.style.display = 'none';
            document.body.classList.remove('jw-modal-open');

        }, 1500);
    }
}