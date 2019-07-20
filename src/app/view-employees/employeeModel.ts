import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { Employee } from '../models/employee';

import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class employeeModel {

    constructor(private restModelComponent: RestModelComponent){}
    employee: Employee[];
    getEmployees(url) {
        this.restModelComponent.get(url).subscribe((employee: Employee[]) => {
            this.employee = employee;
        });
    }
    getEmployeeList() {
        return this.employee;
    }
}