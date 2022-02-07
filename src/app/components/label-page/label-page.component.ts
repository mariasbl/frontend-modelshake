import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-page',
  templateUrl: './label-page.component.html',
  styleUrls: ['./label-page.component.less'],
})
export class LabelPageComponent implements OnInit {
  @Input() label!: string;
  @Input() description!: string;

  constructor() {}

  ngOnInit(): void {}
}
