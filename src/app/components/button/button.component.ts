import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() secondary: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitEvent() {
    this.onClick.next();
  }
}
