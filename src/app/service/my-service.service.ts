import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { custGroup, custEntity } from '../component/list/list.component';

@Injectable()
export class MyServiceService {

  constructor(private http: Http) { }
  private custUrl = 'http://localhost:8080/cust-list.json';

  getCustList(): Promise<custGroup[]> {
    return this.http.get(this.custUrl)
      .toPromise()
      .then(response => response.json().data as custGroup[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
