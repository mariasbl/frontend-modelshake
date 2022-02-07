import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.less'],
})
export class SeparatorComponent implements OnInit {
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
