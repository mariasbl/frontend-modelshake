import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"],
})
export class CheckboxComponent implements OnInit {
  @Input() label!: string;
  value: boolean = false;

  @Output() checkboxChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue() {
    this.checkboxChange.emit(this.value);
  }
}
