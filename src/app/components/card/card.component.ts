import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Milestone, Task } from 'src/app/utils/interfaces';
import { hexToRgb, transformDate, transformHour } from 'src/app/utils/utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() isMilestone: boolean = false;
  @Input() milestone!: Milestone;

  @Input() task!: Task;

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {}

  checkPath() {
    return this.router.url === '/my-tasks';
  }

  getRgb(hex: string) {
    return hexToRgb(hex);
  }

  getDate(date: string) {
    return transformDate(date);
  }

  emitEvent(event: string) {
    this.homeService.actionEvent.next(event);
    this.homeService.currentTaskEvent.next(this.task);
    this.homeService.currentMilestoneEvent.next(this.milestone);
  }
}
