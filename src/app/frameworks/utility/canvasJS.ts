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
        this.restModelComponent.get("http://canvasjs.com/assets/script/canvasjs.min.js").subscribe(res => {
            console.log(res);
            this.canvasJS = res;
        });
    }
    ngOnInit(): void {
        
    }
    getcanvasJS() {
        if (this.canvasJS) {
            return this.canvasJS;
        } else {
            this.restModelComponent.get("http://canvasjs.com/assets/script/canvasjs.min.js").subscribe(res => {
                console.log(res);
                this.canvasJS = res;
            });
        }
        return this.canvasJS;
    }

}