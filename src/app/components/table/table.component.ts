import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() rowTemplate!: TemplateRef<any>;
  @Input() content: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
