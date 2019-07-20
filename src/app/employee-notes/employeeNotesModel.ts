import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { Employee } from '../models/employee';


import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class employeeNotesModel {

    constructor(private restModelComponent: RestModelComponent){}
   postNotes(url,body,messgae) {
        this.restModelComponent.post(url,body,messgae);
    }
    
}