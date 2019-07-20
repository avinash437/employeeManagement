import { Component, OnInit } from '@angular/core';
import VacationResponseJson from '../mocks/vacations.json';
import { VacationResponse } from '../models/VacationResponse';


@Component({
    selector: 'app-vacations',
    templateUrl: './vacations.component.html',
    styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {


    constructor() { }
    vacationResponse: VacationResponse[];
    ngOnInit() {
        console.log(VacationResponseJson);
        this.vacationResponse = VacationResponseJson;
    }

}
