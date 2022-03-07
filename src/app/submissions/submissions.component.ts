import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Milestone, Submission } from "../utils/interfaces";
import { convertArtifact, transformDate } from "../utils/utils";
import { SubmissionService } from "./submissions.service";

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.less"],
})
export class SubmissionsComponent implements OnInit {
  submissions: {
    milestone: string;
    submission: Submission | undefined;
    collapse: boolean;
  }[] = [];

  headersTable: string[] = [
    "Descrição",
    "Artefacto",
    "Messagem de Erro",
    "Estado",
  ];

  open: boolean = false;

  constructor(
    private appService: AppService,
    private submissionService: SubmissionService
  ) {}

  ngOnInit(): void {
    this.appService.tabEvent.next("Submissions");
    this.submissionService.getMilestones().forEach((milestone) => {
      let submission = this.submissionService.getSubmission(milestone.color);
      this.submissions.push({
        milestone: milestone.title,
        submission,
        collapse: true,
      });
    });
  }

  getResults(milestone: string, status: string) {
    let elems = this.submissions
      .find((s) => s.milestone === milestone)
      ?.submission?.validations?.filter((v) => v.status === status).length;
    return elems ? elems : 0;
  }

  getColor(status: string) {
    if (status === "passed") return "rgb(37, 184, 0, 0.3)";
    else if (status === "error") return "rgb(255, 35, 21, 0.3)";
    else if (status === "warning") return "rgb(255, 176, 21, 0.3)";
    else return "";
  }

  getDate(date: string) {
    return transformDate(date);
  }

  getArtifact(artifact: string) {
    return convertArtifact(artifact);
  }

  setCollapse(milestone: string) {
    this.submissions.map((s) => {
      if (s.milestone === milestone) s.collapse = !s.collapse;
      return s;
    });
  }

  changeStatusModal(value: boolean) {
    this.open = value;
  }
}
