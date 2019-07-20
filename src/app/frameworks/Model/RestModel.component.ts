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


@Injectable({
    providedIn: 'root'
})
export class RestModelComponent {

    private response = new Subject<any>();

    constructor(private http: HttpClient, private modalService: ModalService, @Inject(DOCUMENT) document, private router: Router, private userService: UserService) { }
    ngOnInit() {


    }
    getHeaders() {


       
        let header;
        let userDetails = this.userService.getUserDetails();
        if (userDetails) {
            header = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json')
            .set('parentId', userDetails.username);
        }else {
            header = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json');
        }

        return header;
    }
    get(url) {

        this.modalService.openLoadingModal();
        let that = this;
        setTimeout(function () {
            that.modalService.close(false);
        }, 200);
        return this.http.get((config.context + url), { headers: this.getHeaders() }).pipe();
    }
    post(url, body, message) {
        this.modalService.openLoadingModal();
        let that = this;
        let res;
        this.http.post((config.context + url),
            body, {
                headers: this.getHeaders()
            })
            .subscribe(
                suc => {
                    that.modalService.closeLoadingModal();
                    setTimeout(function () {
                        that.modalService.close(false);
                    }, 2000);
                    console.log(suc);
                    this.response.next(suc);

                },
                err => {
                    that.modalService.closeLoadingModal();
                    this.modalService.openModal(message);
                    setTimeout(function () {
                        that.modalService.close(true);
                    }, 2000);
                    console.log(err);
                    this.response.next(err);
                }
            );
    }
    getResponse(): Observable<any> {
        return this.response.asObservable();
    }
}