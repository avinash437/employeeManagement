import { Component, OnInit } from '@angular/core';
import { Lead } from '../models/lead';
import { LeadModel } from './leadModel';
import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { DataStateStore } from '../models/DataStateStore';


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  leads = <any>[];
  constructor(private http: HttpClient, public dataStateStore: DataStateStore, private router: Router,
    private leadModel: LeadModel ) { }

  ngOnInit() {
    var that =this;
    this.leadModel.getLeads('/leads').subscribe(res => {
      that.leads = res;
    });
  }

  loadProfile($event, lead){

  }

}
