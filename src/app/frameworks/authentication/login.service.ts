import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { UserDetails } from '../../models/UserDetails';
import { ModalService } from '../utility/modal/modal.service';
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class LoginService implements CanActivate {
    private userDetails;
    constructor(private modalService: ModalService,private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var that = this;
        if(!this._isLoggedIn()){
            
            this.modalService.openModal('Please Login to access the page.');
            this.router.navigateByUrl('/login');
        }else {
            let element = document.getElementById('mainController');
            element.style.display = 'block';
        }
       return true;
    }

    setUserDetails(userDetails) {
        this.userDetails = userDetails;
    }
    getUserDetails() {
        if(!this.userDetails){
            let sessionObject =  sessionStorage.getItem('userDetails');
            if(sessionObject){
                this.userDetails = JSON.parse(sessionObject);
            }            
        }
        return this.userDetails;
    }
    _isLoggedIn(){
        return JSON.parse(sessionStorage.getItem('_isLoggedIn'));
    }

    isLead(){
        return (this.userDetails.lead || this.userDetails.manager);
    }
}