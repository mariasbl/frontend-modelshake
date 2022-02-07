import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../utils/interfaces';

@Pipe({
  name: 'filterByStatus',
  pure: false,
})
export class HomePipe implements PipeTransform {
  transform(tasks: Task[], label: string): Task[] {
    return tasks.filter((task) => task.status === label);
  }
}
