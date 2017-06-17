import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ServerService {

  constructor(private http:Http) {

  }

  // saveCustomer(customer: any) {
  //   this.http.post('http://localhost:3306/jobowit_db',)
  // }

}
