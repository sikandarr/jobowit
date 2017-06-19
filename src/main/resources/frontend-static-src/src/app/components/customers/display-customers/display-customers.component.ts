import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import customerBlueprint, {Customer} from '../../../models/customer';
import {ServerService} from "../../../services/ServerService";
import {Response} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-display-customers',
  templateUrl: './display-customers.component.html',
  styleUrls: ['./display-customers.component.scss']
})
export class DisplayCustomersComponent implements OnInit {
  customerBlueprint = customerBlueprint;
  allCustomers: Array<Customer>;
  @Input()
  parentSubject: Subject<any>;
  constructor(private serverService:ServerService,
              private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.serverService.getAllCustomers()
      .subscribe((response:Response)=>{
          const data = response.json();
          this.allCustomers = data;
          console.log(data);
      },(error)=>{
          console.log(error);
      });
    this.parentSubject.subscribe((event) => {
      console.log(event);
      this.serverService.getAllCustomers()
        .subscribe((response:Response)=>{
          const data = response.json();
          this.allCustomers = data;
          this.changeDetectorRef.detectChanges();
          console.log(data);
        },(error)=>{
          console.log(error);
        });
    })
  }
}
