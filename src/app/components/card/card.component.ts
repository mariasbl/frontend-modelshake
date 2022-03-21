import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/utils/api/api";
import { Milestone, Task } from "src/app/utils/interfaces";
import { hexToRgb, transformDate } from "src/app/utils/utils";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.less"],
})
export class CardComponent implements OnInit {
  @Input() isMilestone: boolean = false;
  @Input() milestone: Milestone | undefined;
  @Input() task: Task | undefined;

  assignedUser: string = "";

  constructor(private router: Router, private api: ApiService) {}

  async ngOnInit() {
    if (this.task && this.task?.assignedUser)
      this.assignedUser = await this.getUserName(this.task.assignedUser);
  }

  checkPath() {
    return this.router.url === "/my-tasks";
  }

  getRgb(hex: string | undefined) {
    return hex && hexToRgb(hex);
  }

  getDate(date: string | undefined) {
    return date && transformDate(date);
  }

  async getUserName(id: string) {
    const user = await this.api.getUserById(id).toPromise();
    return user.name;
  }
}
