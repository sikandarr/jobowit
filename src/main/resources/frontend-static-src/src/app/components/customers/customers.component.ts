import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  createCustomerClicked:boolean = false;
  parentSubject:Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  createCustomer() {
    this.createCustomerClicked = true;
  }

  getInformed() {
    this.createCustomerClicked = false;
    this.parentSubject.next('child notified');
  }
}
