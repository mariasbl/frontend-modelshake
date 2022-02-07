import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less'],
})
export class ActionsComponent implements OnInit {
  @Input() icon!: string;
  @Input() large: boolean = false;
  @Input() position: boolean = false;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitEvent(event: string) {
    this.onClick.next(event);
  }
}
