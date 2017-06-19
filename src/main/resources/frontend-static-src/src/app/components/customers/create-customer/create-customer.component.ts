import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ServerService} from "../../../services/ServerService";
import {Customer} from "../../../models/customer";
import {Response} from "@angular/http";


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit, OnDestroy {
  @Output("informParent") informParent: EventEmitter<null> =
    new EventEmitter();
  customer:Customer = new Customer();

  constructor(private serverService:ServerService) { }

  ngOnInit() {

  }

  saveCustomer() {
    console.log(this.customer);
    this.serverService.saveCustomer(this.customer)
      .subscribe((response:Response) => {
          console.log(response);
          this.informParent.emit();
        },
        (error) => {
          console.log(error);
          this.informParent.emit();
        });

  }

  ngOnDestroy() {

  }
}
