import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent implements OnInit {
  @Input() open: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.next();
  }
}
