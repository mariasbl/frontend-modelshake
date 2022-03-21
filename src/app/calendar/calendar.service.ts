import { Injectable } from "@angular/core";
import { Event } from "../utils/interfaces";

@Injectable({
  providedIn: "root",
})
export class CalendarService {
  mockEvents: Event[] = [
    {
      title: "First deadline",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      date: "27/03/2022",
      startHour: "09:00",
    },
    {
      title: "Team meeting",
      description: "Situation point of project",
      location: "Zoom",
      date: "27/03/2022",
      startHour: "09:00",
      endHour: "10:00",
      createdBy: "afonsopereira",
    },
  ];

  constructor() {}

  getEvents() {
    return this.mockEvents;
  }
}
