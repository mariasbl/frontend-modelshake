import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../utils/api/api";
import { Milestone, Task, TaskStatus, Team } from "../utils/interfaces";
import {
  convertArtifact,
  getDifferenceBetweenDates,
  hexToRgb,
  transformDate,
} from "../utils/utils";

@Component({
  selector: "app-milestone",
  templateUrl: "./milestone.component.html",
  styleUrls: ["./milestone.component.less"],
})
export class MilestoneComponent implements OnInit {
  headersTable = ["Task", "Deadline", "Assigned User", "Status"];
  milestone!: Milestone;
  tasks!: Task[];
  team!: Team;

  team_id = "622e21b0fa4cb471e3519492";

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const milestone_id = params["id"];
      this.api
        .getMilestoneById(milestone_id)
        .subscribe((milestone) => (this.milestone = milestone));
      this.api.getTeamById(this.team_id).subscribe((team)=> this.team = team);
      this.api
        .getTasksByTeam(this.team_id)
        .subscribe(
          (tasks) =>
            (this.tasks = tasks.filter((t) => (t.milestone_id === milestone_id)))
        );
    });
  }

  getArtifact(artifact: string) {
    return convertArtifact(artifact);
  }

  getRgb(hex: string | undefined) {
    return hex && hexToRgb(hex);
  }

  getLeftDays(date: string | undefined) {
    return date && getDifferenceBetweenDates(date);
  }

  getDate(date: string | undefined) {
    return date && transformDate(date);
  }

  getColor(status: string) {
    if (status === TaskStatus.DONE) return "rgb(37, 184, 0, 0.3)";
    else if (status === TaskStatus.TODO) return "rgb(255, 35, 21, 0.3)";
    else if (status === TaskStatus.INPROGRESS) return "rgb(255, 176, 21, 0.3)";
    else return "";
  }

  getLabel(status: string) {
    if (status === TaskStatus.DONE) return "Done";
    else if (status === TaskStatus.TODO) return "To Do";
    else if (status === TaskStatus.INPROGRESS) return "In Progress";
    else return "";
  }

  getName(user_id: string) {
    return this.team?.elements?.find((user)=> user._id === user_id)?.name;
  }
}
