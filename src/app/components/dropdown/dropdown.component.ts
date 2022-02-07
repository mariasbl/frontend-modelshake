import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
})
export class DropdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: Option[] = [];

  @Input() value!: string;
  @Output() valueChange = new EventEmitter();

  emit() {
    this.valueChange.emit(this.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
