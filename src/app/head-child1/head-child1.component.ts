import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-head-child1',
  templateUrl: './head-child1.component.html',
  styleUrls: ['./head-child1.component.css']
})
export class HeadChild1Component implements OnInit {
  @Input() name;
  public age = 12;
  @Output() ageSend: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.sendAgeEmmint();
  }
  sendAgeEmmint() {
    this.ageSend.emit();
  }
}
