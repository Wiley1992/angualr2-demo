import { OnInit } from '@angular/core';
import { Component, OnsTab } from 'angular2-onsenui';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Tab1Component } from './tab1/tab1.component'
import { Tab2Component } from './tab2/tab2.component'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tab1 = Tab1Component
  tab2 = Tab2Component
  //
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
