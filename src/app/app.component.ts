import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './frameworks/utility/route-animation';

import { UserService } from './frameworks/authentication/user.service';
import './modal.less';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]

})
export class AppComponent  implements OnInit {

  isLead: false;
  constructor(private userService: UserService) {
    
  }
  ngOnInit() {
    this.isLead = this.userService.isLead();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/