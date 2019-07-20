import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { VacationResponse } from '../models/VacationResponse';

import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class viewVacationModel {

    constructor(private restModelComponent: RestModelComponent){}
    vacationResponse: VacationResponse[];
    getVacationList(url) {
        this.restModelComponent.get(url).subscribe((vacationResponse: VacationResponse[]) => {
            this.vacationResponse = vacationResponse;
        });
    }
    getEmployeeList() {
        return this.vacationResponse;
    }
}