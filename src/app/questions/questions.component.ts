import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Question } from "../utils/interfaces";
import { hexToRgb, transformDate } from "../utils/utils";
import { QuestionService } from "./questions.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.less"],
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];

  constructor(
    private appService: AppService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.appService.tabEvent.next("Questions");
    this.questions = this.questionService.getQuestions();
  }

  getRgb(hex: string) {
    return hexToRgb(hex);
  }

  getDate(date: string) {
    return transformDate(date);
  }
}
