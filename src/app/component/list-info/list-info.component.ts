import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { custGroup, custEntity } from '../list/list.component';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css']
})
export class ListInfoComponent implements OnInit {

  custName: string;
  custCode: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.custName = params['name'];
      this.custCode = params['code'];
    });
  }

  goBack(): void {
    this.location.back();
  }

}
