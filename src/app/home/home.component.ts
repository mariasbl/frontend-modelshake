import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppService } from '../app.service';
import { Milestone, Task, TaskStatus, Option } from '../utils/interfaces';
import {
  convertArtifact,
  getDifferenceBetweenDates,
  hexToRgb,
  transformDate,
} from '../utils/utils';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  status: Option[] = [
    { label: 'To do', value: TaskStatus.TODO },
    { label: 'In progress', value: TaskStatus.INPROGRESS },
    { label: 'Done', value: TaskStatus.DONE },
  ];

  milestones!: Milestone[];
  tasks!: Task[];

  open: boolean = false;

  currentEvent: string = '';
  currentTask!: Task;
  currentMilestone!: Milestone;

  //input's to new/edit task
  inputDescription: string = '';
  inputDeadline: Date | string = '';
  inputMilestoneSelectedValue: string = '';
  //input's to reassign task
  inputReassignTask: string = '';
  //input's to start task
  inputStartTask: string = '';
  //input's to edit task

  constructor(
    private appService: AppService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.appService.tabEvent.next('Home');
    this.milestones = this.homeService.getMilestones();
    this.tasks = this.homeService.getTasks();
    this.homeService.actionEvent.subscribe((action) => this.applyEvent(action));
    this.homeService.currentTaskEvent.subscribe((task) => {
      this.currentTask = task;
      this.inputDescription = task.description;
      this.inputDeadline = moment(task.deadline, 'D/MM/YYYY').toDate();
      this.inputMilestoneSelectedValue = task.milestone.color;
      this.inputReassignTask = task.assignedUser!;
    });
    this.homeService.currentMilestoneEvent.subscribe((milestone) => {
      this.currentMilestone = milestone;
    });
  }

  changeStatusModal(value: boolean) {
    this.open = value;
    if (!value) this.close();
  }

  close() {
    this.inputDeadline = '';
    this.inputDescription = '';
    this.inputReassignTask = '';
    this.inputMilestoneSelectedValue = '';
    this.inputStartTask = '';
  }

  applyEvent(event: string) {
    this.currentEvent = event;
    this.changeStatusModal(true);
  }

  getMilestone(value: any) {
    return this.milestones.find((milestone) => milestone.color === value);
  }

  getUserOptions(): Option[] {
    let array: Option[] = [];
    this.currentTask.team.elements.map((e) => {
      array.push({ label: e.name, value: e.email });
    });
    return array;
  }

  getMilestoneOptions(): Option[] {
    let array: Option[] = [];
    this.milestones.map((e) => {
      array.push({ label: e.title, value: e.color });
    });
    return array;
  }

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

  createTask() {
    /*TODO*/
  }

  editTask() {
    /*TODO*/
  }

  startTask() {
    /*TODO*/
  }

  reassignTask() {
    /*TODO*/
  }

  removeTask() {
    /*TODO*/
  }
}
