import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { Lead } from '../models/lead';

import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class LeadModel {

    constructor(private restModelComponent: RestModelComponent){}
    lead: Lead[];
    getLeads(url) {
        return this.restModelComponent.get(url);
    }
    getLeadList() {
        return this.lead;
    }
}