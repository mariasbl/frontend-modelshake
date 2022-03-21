import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Event } from "../utils/interfaces";
import { transformStringToDate } from "../utils/utils";
import { CalendarService } from "./calendar.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"],
})
export class CalendarComponent implements OnInit {
  value: Date = new Date();
  minDate: Date = new Date();

  events: Event[] = [];

  constructor(
    private appService: AppService,
    private calendarService: CalendarService
  ) {}

  ngOnInit(): void {
    this.appService.updateTab("Calendar");
    this.events = this.calendarService.getEvents();
  }

  isAfterToday(date: any) {
    const today = new Date();
    return date.month === today.getMonth() && date.year === today.getFullYear()
      ? date.day >= today.getDate()
      : (date.month >= today.getMonth() && date.year >= today.getFullYear()) ||
          date.year > today.getFullYear();
  }

  hasEvent(date: any) {
    return (
      this.events.find((e) => {
        const d = transformStringToDate(e.date);
        return (
          d.getDate() === date.day &&
          d.getMonth() === date.month &&
          d.getFullYear() === date.year
        );
      }) !== undefined
    );
  }
}
