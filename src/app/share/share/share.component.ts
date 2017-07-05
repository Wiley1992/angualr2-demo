import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'w-input',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})

export class ShareComponent implements OnChanges {
  @Input() header: string;
  @Input() name: string;
  @Input() custName: string;

  @Output() valueChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngDoCheck() {
    // console.log('ngDoCheck : ' + this.custName);
  }

  inputAction(value: string) {
    this.valueChange.emit(value);
  }

  nowValue() {
    console.log("  :" + this.custName);
  }

  wInput(value: string) {
    console.log(' : ' + value);
    this.inputAction(value);
  }

  changed(value: string) {
    console.log('changed : ' + value);

  }

}
