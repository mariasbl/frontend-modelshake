import { Component, Input, OnInit } from '@angular/core';
import { hexToRgb } from 'src/app/utils/utils';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less'],
})
export class AlertsComponent implements OnInit {
  @Input() message: string = '';
  /** Type can be error or info */
  @Input() type: string = '';

  error: string = '';
  info: string = '';

  constructor() {}

  ngOnInit(): void {
    this.error = hexToRgb('#FF2315')!;
    this.info = hexToRgb('#518099')!;
  }
}
