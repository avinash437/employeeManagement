import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import config from '../config/config.json';
import { HelloComponent } from '../../hello/hello.component';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { DOCUMENT } from '@angular/common';
import { Subject, Observable } from 'rxjs';
import { Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { ModalService } from '../utility/modal/modal.service';
import { UserService } from '../authentication/user.service';
import { UserDetails } from '../../models/UserDetails';
import { RestModelComponent } from './../Model/RestModel.component';

@Injectable({
    providedIn: 'root'
})
export class CanjasJSComponent implements OnInit {
    canvasJS;
    constructor(private restModelComponent: RestModelComponent) {
        
    }
    ngOnInit(): void {
        
    }
    getcanvasJS(title, data, elementRef) {
        return new CanvasJS.Chart(elementRef, {
            animationEnabled: true,
            data: [{
              type: "area",
              axisY: {
                title: title,
                includeZero: false
              },
              dataPoints: data
            }]
          });
        
    }

}