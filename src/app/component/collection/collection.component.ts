import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ShareComponent } from '../../share/share/share.component'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnChanges {

  public custName: string;
  public header: string;
  public name: string;
  public value: string;

  public textHeader: string;

  public isShow: boolean;
  public testPipe: string;

  @ViewChild(ShareComponent)
  private shareComponent: ShareComponent;


  constructor(private location: Location) {

    this.header = "输入框";
    this.name = "名称";
    this.value = "Wiley";

    this.textHeader = "这是一个文本框";
    this.isShow = true;

    this.testPipe = "AAAcccVV";

  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  showValue(): void {
    console.log(this.custName);
    console.log(`ViewChild : ` + this.shareComponent.custName);
  }

  valueChange(value: string) {
    console.log(`valueChange : ` + this.custName);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      console.log(`parent : ${propName}:  ${cur}`);
    }
  }
}
