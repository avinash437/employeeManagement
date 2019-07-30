import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";


@Injectable({
    providedIn: 'root'
})
export class employeeFeedbackModel {

    
    constructor(private restModelComponent: RestModelComponent) { }
    addFeedback(body) {
        this.restModelComponent.post('/feedback', body, 'Something went wrong. Please try again !!');
    }
    getFeedback(body) {
        this.restModelComponent.post('/feedback', body, 'Something went wrong. Please try again !!');
    }
}