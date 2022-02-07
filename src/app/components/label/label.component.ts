import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less'],
})
export class LabelComponent implements OnInit {
  @Input() label!: string;
  @Input() backgroundColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
