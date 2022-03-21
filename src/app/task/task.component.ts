import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../utils/api/api";
import { Milestone, Task, TaskStatus, Team, User } from "../utils/interfaces";
import { hexToRgb, transformDate, transformStringToDate } from "../utils/utils";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.less"],
})
export class TaskComponent implements OnInit {
  task: Task | undefined;
  milestone: Milestone | undefined;
  team: Team | undefined;
  assignedUser: User | undefined;
  editMode: boolean = false;
  inputs: {
    title: string;
    date: Date;
    estimate: number;
    description: string;
    status: string;
    user: string;
  } = {} as {
    title: string;
    date: Date;
    estimate: number;
    description: string;
    status: string;
    user: string;
  };

  TaskStatus = TaskStatus;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const task_id = params["id"];
      this.api.getTaskById(task_id).subscribe((task) => {
        this.updateFields(task);
        this.getTeam(task);
        this.getMilestone(task);
        if (task.assignedUser) this.getUser(task.assignedUser);
      });
    });
  }

  getTeam(task: Task) {
    this.api.getTeamById(task.team_id).subscribe((team) => (this.team = team));
  }

  getMilestone(task: Task) {
    this.api
      .getMilestoneById(task.milestone_id)
      .subscribe((milestone) => (this.milestone = milestone));
  }

  getUser(user_id: string) {
    this.api
      .getUserById(user_id)
      .subscribe((user) => (this.assignedUser = user));
  }

  updateFields(task: Task) {
    this.task = task;
    this.inputs["title"] = task.title;
    this.inputs["date"] = transformStringToDate(task.deadlineDate);
    this.inputs["estimate"] = task.estimate;
    this.inputs["description"] = task.description;
  }

  getRgb(hex: string | undefined) {
    return hex && hexToRgb(hex);
  }

  getLabel(status: string) {
    if (status === TaskStatus.DONE) return "Done";
    else if (status === TaskStatus.TODO) return "To Do";
    else if (status === TaskStatus.INPROGRESS) return "In Progress";
    else return "";
  }

  getColor(status: string) {
    if (status === TaskStatus.DONE) return "rgb(37, 184, 0, 0.3)";
    else if (status === TaskStatus.TODO) return "rgb(255, 35, 21, 0.3)";
    else if (status === TaskStatus.INPROGRESS) return "rgb(255, 176, 21, 0.3)";
    else return "";
  }

  getDate(date: string | undefined) {
    return date && transformDate(date);
  }

  getAssignUserOptions() {
    return (
      this.team?.elements.map((element) => ({
        label: element.name,
        value: element._id,
      })) || []
    );
  }

  getTaskStatusOptions() {
    return [
      { label: "Todo", value: TaskStatus.TODO },
      { label: "In Progress", value: TaskStatus.INPROGRESS },
      { label: "Done", value: TaskStatus.DONE },
    ];
  }

  assignTask() {}

  setTaskStatus() {
    if (this.task)
      this.api
        .updateTaskStatus(this.task._id, this.inputs.status)
        .subscribe({ next: () => {}, error: () => {} });
  }

  deleteTask() {
    
  }

  updateTask() {
    console.log(this.inputs);
  }

  log(event: any) {
    console.log(event);
  }
}
