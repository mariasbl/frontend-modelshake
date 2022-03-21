import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { ApiService } from "../utils/api/api";
import { Milestone, Task, TaskStatus, Option } from "../utils/interfaces";
import { hexToRgb } from "../utils/utils";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  status: Option[] = [
    { label: "To do", value: TaskStatus.TODO },
    { label: "In progress", value: TaskStatus.INPROGRESS },
    { label: "Done", value: TaskStatus.DONE },
  ];

  milestones: Milestone[] = [];
  tasks: Task[] = [];

  open: boolean = false;

  currentTask!: Task;
  currentMilestone!: Milestone;

  //To remove
  team_id = "622e21b0fa4cb471e3519492";
  campaign_id = "622dfc4a92445c3092f956e9";

  constructor(private appService: AppService, private api: ApiService) {}

  ngOnInit(): void {
    this.appService.updateTab("Home");
    this.api.getMilestonesByCampaign(this.campaign_id).subscribe({
      next: (milestones) => (this.milestones = milestones),
      error: () => {},
      complete: () => {},
    });
    this.api.getTasksByTeam(this.team_id).subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: () => {},
    });
  }

  getMilestoneById(id: string) {
    return this.milestones.find((milestone) => milestone._id === id);
  }
}
