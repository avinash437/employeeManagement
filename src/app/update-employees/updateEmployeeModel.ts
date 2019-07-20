import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { Employee } from '../models/employee';


import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class updateEmployeeModel {

    constructor(private restModelComponent: RestModelComponent){}
    employee: Employee[];
    addEmployeeVacations(url,body,message) {
        this.restModelComponent.post(url,body,message);
    }
    
}