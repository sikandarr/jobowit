import { Component, OnInit } from '@angular/core';
import customerBlueprint from '../../../models/customer';

@Component({
  selector: 'app-display-customers',
  templateUrl: './display-customers.component.html',
  styleUrls: ['./display-customers.component.scss']
})
export class DisplayCustomersComponent implements OnInit {
  customerBlueprint = customerBlueprint;
  constructor() { }

  ngOnInit() {
  }

}
