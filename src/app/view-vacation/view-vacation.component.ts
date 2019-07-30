import { Component, OnInit,AfterViewInit } from '@angular/core';
import VacationResponseJson from '../mocks/vacations.json';
import { VacationResponse } from '../models/VacationResponse';
import { viewVacationModel } from './viewVacationModel';
import { HelloComponent } from '../hello/hello.component';
import { ModalService } from '../frameworks/utility/modal/modal.service';


@Component({
    selector: 'app-view-vacation',
    templateUrl: './view-vacation.component.html',
    styleUrls: ['./view-vacation.component.css']
})
export class ViewVacationComponent implements OnInit,AfterViewInit {

    constructor(public viewVacationModel: viewVacationModel,private modalService: ModalService) { }
    vacationResponse: VacationResponse[];
    ngOnInit() {
        this.viewVacationModel.getVacationList('/employee/vacations');
        this.vacationResponse = VacationResponseJson;
    }
    ngAfterViewInit(){
       // this.modalService.open();
    }
    
}
