import { Component, Input, OnInit } from "@angular/core";
import { Event } from "src/app/utils/interfaces";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.less"],
})
export class EventComponent implements OnInit {
  @Input() event!: Event;

  constructor() {}

  ngOnInit(): void {}

  emitEvent(event: string) {}
}
