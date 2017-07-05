import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MyServiceService]
})
export class ListComponent implements OnInit {

  searchStr: string;
  custList: custGroup[];

  constructor(private router: Router,
    private location: Location,
    private myService: MyServiceService) { }

  ngOnInit() {
    this.getCustList();
    this.searchStr = "";
  }

  getCustList(): void {
    this.myService.getCustList().then(custlist => this.custList = custlist,
    );
    // this.custList = this.myService.getCustList();
  }

  custClick(cust: custEntity) {
    this.router.navigate(['listinfo', cust.custName, cust.custCode])
  }

  goBack(): void {
    this.location.back();
  }
}

export class custGroup {
  head: string;
  data: Array<custEntity>
}

export class custEntity {
  custID: string;
  custCode: string;
  custName: string;
  custAddress: string
}
