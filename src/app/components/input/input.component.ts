import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
})
export class InputComponent implements OnInit {
  @Input() type: string = '';
  @Input() label: string = '';

  inputValue: string | Date | number = '';

  @Input()
  get value() {
    return this.inputValue;
  }

  @Output() valueChange = new EventEmitter();

  set value(val) {
    this.inputValue = val;
    this.valueChange.emit(this.inputValue);
  }

  constructor() {}

  ngOnInit(): void {}
}
