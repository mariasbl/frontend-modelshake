import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less'],
})
export class ColumnComponent implements OnInit {
  @Input() label: string = '';
  @Input() dark: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
