import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeService } from '../home/home.service';
import { Milestone, Task, TaskStatus, Option } from '../utils/interfaces';
import {
  convertArtifact,
  getDifferenceBetweenDates,
  hexToRgb,
  transformDate,
} from '../utils/utils';
import { MyTasksService } from './my-tasks.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.less'],
})
export class MyTasksComponent implements OnInit {
  status: Option[] = [
    { label: 'In progress', value: TaskStatus.INPROGRESS },
    { label: 'Done', value: TaskStatus.DONE },
  ];

  milestones!: Milestone[];
  tasks!: Task[];

  open: boolean = false;

  currentEvent: string = '';
  currentTask!: Task;
  currentMilestone!: Milestone;

  constructor(
    private appService: AppService,
    private mytaskService: MyTasksService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.appService.tabEvent.next('My tasks');
    this.tasks = this.mytaskService.getTasksByUser('');
    this.milestones = this.mytaskService
      .getMilestones()
      .filter((m) => this.tasks.some((t) => t.milestone.color === m.color));
    this.homeService.actionEvent.subscribe((action) => this.applyEvent(action));
    this.homeService.currentTaskEvent.subscribe((task) => {
      this.currentTask = task;
    });
    this.homeService.currentMilestoneEvent.subscribe((milestone) => {
      this.currentMilestone = milestone;
    });
  }

  applyEvent(event: string) {
    this.currentEvent = event;
    this.changeStatusModal(true);
  }

  changeStatusModal(value: boolean) {
    this.open = value;
    if (!value) this.close();
  }

  close() {}

  getRgb(hex: string) {
    return hexToRgb(hex);
  }

  getDate(date: string) {
    return transformDate(date);
  }

  getArtifact(artifact: string) {
    return convertArtifact(artifact);
  }

  getLeftDays(date: string) {
    return getDifferenceBetweenDates(date);
  }
}
