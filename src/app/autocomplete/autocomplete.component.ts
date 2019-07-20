import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LeadModel } from '../lead/leadModel';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  title = 'materialApp';
  myControl = new FormControl();
  states = [];
  leads;
  constructor(private leadModel: LeadModel ) {
    this.getLeadsData();
  }
  getLeadsData() {
    this.leadModel.getLeads('/leads').subscribe(res => {
      for (let x in res) {
        this.states.push({
          value: res[x].username,
          display: res[x].name
        });
      }
    });

  }
  optionSelected(value){
    console.log(value);
  }
}