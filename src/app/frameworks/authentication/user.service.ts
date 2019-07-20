import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserDetails } from '../../models/UserDetails';
import { ModalService } from '../utility/modal/modal.service';
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class UserService implements CanActivate {
    private userDetails;
    constructor(private modalService: ModalService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var that = this;
        this.userDetails = this.getUserDetails();
        if (!(this.userDetails.lead || this.userDetails.manager))
            this.modalService.openModal('You are not authorized to view this page');
        setTimeout(function () {
            that.modalService.close(true);
        }, 2000);
        return this.userDetails.lead || this.userDetails.manager;
    }

    setUserDetails(userDetails) {
        this.userDetails = userDetails;
    }
    getUserDetails() {
        if (!this.userDetails) {
            let sessionObject = sessionStorage.getItem('userDetails');
            if (sessionObject) {
                this.userDetails = JSON.parse(sessionObject);
            }
        }
        return this.userDetails;
    }

    isLead() {
        if (!this.userDetails) {
            this.userDetails = this.getUserDetails();
        }
        if(this.userDetails){
            return this.userDetails.lead || this.userDetails.manager;
        }else {
            return false;
        }
        
    }
}