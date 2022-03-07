import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Gamification } from "../utils/interfaces";
import { RankingService } from "./ranking.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.less"],
})
export class RankingComponent implements OnInit {
  gamification: Gamification[] = [];
  headersTable: string[] = ["Position", "Badge", "Level", "Team", "Points"];

  constructor(
    private appService: AppService,
    private rankingService: RankingService
  ) {}

  ngOnInit(): void {
    this.appService.tabEvent.next("Ranking");
    this.gamification = this.rankingService.getRanking();
  }
}
