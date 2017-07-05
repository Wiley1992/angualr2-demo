import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w-text',
  templateUrl: './w-text.component.html',
  styleUrls: ['./w-text.component.css']
})
export class WTextComponent implements OnInit {

  @Input() header: string;
  @Input() textC: string;

  constructor() { }

  ngOnInit() {
    this.textC = "Wasfha"
  }

}
