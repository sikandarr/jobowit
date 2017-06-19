import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Customer} from "../models/customer";

@Injectable()
export class ServerService {

  constructor(private http: Http) {

  }

  saveCustomer(customer: Customer) {
    console.log(customer);
    return this.http.post('http://localhost:8080/setParty', customer);
  }

  getAllCustomers() {
     return this.http.get('http://localhost:8080/getParty');
  }


}
