import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Gamification } from "../utils/interfaces";
import { hexToRgb } from "../utils/utils";
import { RankingService } from "./ranking.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.less"],
})
export class RankingComponent implements OnInit {
  gamification: Gamification[] = [];
  headersTable: { label: string; isMilestone?: boolean; bgColor?: string }[] = [
    { label: "Position" },
    { label: "Badge" },
    { label: "Level" },
    { label: "Team" },
  ];

  constructor(
    private appService: AppService,
    private rankingService: RankingService
  ) {}

  ngOnInit(): void {
    this.appService.updateTab("Ranking");
    this.buildTable();
    this.gamification = this.rankingService.getRanking();
  }

  buildTable() {
    this.rankingService.getMilestones().forEach((milestone) =>
      this.headersTable.push({
        label: milestone.title,
        isMilestone: true,
        bgColor: this.getRgb(milestone.color)!
      })
    );
    this.headersTable.push({ label: "Points" });
  }

  getRgb(color: string) {
    return hexToRgb(color);
  }
}
