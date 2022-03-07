import { Pipe, PipeTransform } from "@angular/core";
import { Event } from "../utils/interfaces";
import { transformStringToDate } from "../utils/utils";

@Pipe({
  name: "filterByDate",
})
export class CalendarPipe implements PipeTransform {
  transform(items: Event[], selectedDate: Date): Event[] {
    return items.filter((item) => {
      const date = transformStringToDate(item.date);

      return (
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()
      );
    });
  }
}
