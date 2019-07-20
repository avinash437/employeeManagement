import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { Planning } from '../models/planning';


import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class planningModel {

    constructor(private restModelComponent: RestModelComponent){}
    planning: Planning[];
    getPlanning(url) {
        return this.restModelComponent.get(url);
    }
    getPlanningList() {
        return this.planning;
    }
}