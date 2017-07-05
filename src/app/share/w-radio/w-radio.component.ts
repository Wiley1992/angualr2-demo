import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'w-radio',
  templateUrl: './w-radio.component.html',
  styleUrls: ['./w-radio.component.css']
})
export class WRadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  wInput(ret: string) {
    console.log(ret);
  }

}
