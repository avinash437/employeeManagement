import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestModelComponent } from "../frameworks/Model/RestModel.component";
import { UserDetails } from '../models/UserDetails';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { ModalService } from '../frameworks/utility/modal/modal.service';
import { UserService } from '../frameworks/authentication/user.service';


import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class loginModel {
  userDetails: UserDetails
  subscription: Subscription;

  constructor(private restModelComponent: RestModelComponent, private router: Router, private modalService: ModalService, private userService : UserService) {

   }

  login(url, body,message) {

    this.subscription = this.restModelComponent.getResponse().subscribe(res => {
      if (res.error) {
        console.log(res);
      } else {
        this.userService.setUserDetails(res);
        sessionStorage.setItem('userDetails', JSON.stringify(res));
        sessionStorage.setItem('_isLoggedIn', JSON.stringify(true));
        let element = document.getElementById('mainController');
        element.style.display = 'block';
        if(this.userService.getUserDetails().lead){
          this.router.navigateByUrl('/dashboard'); 
        }else{
          this.router.navigateByUrl('/vacations');
        }
      }
    });
    this.restModelComponent.post(url, body,message);


  }

}