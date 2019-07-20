import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";
import { login } from '../models/login';
import { loginModel } from './loginModel';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  
  
    constructor(private formBuilder: FormBuilder,private loginModel: loginModel, private router: Router) { }
    login: login;
    ngOnInit() {
      sessionStorage.clear();
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required]]
      }/*, {
        validator: MustMatch('password', 'confirmPassword')
      }*/);
  }
  // convenience getter for easy access to form fields
    get f() {
      return this.registerForm.controls; 
    }
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      const loginBean = new login();
      loginBean.username = this.registerForm.value.username;
      loginBean.password = this.registerForm.value.password;
      let response = this.loginModel.login('/login',loginBean, 'Sorry, your username and password are incorrect - please try again. ' );
      
     
    }
    
  }
  