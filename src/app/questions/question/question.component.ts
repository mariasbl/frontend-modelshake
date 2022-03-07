import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Question } from "src/app/utils/interfaces";
import { hexToRgb, transformDate } from "src/app/utils/utils";
import { QuestionService } from "../questions.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.less"],
})
export class QuestionComponent implements OnInit {
  question!: Question;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) this.question = this.questionService.getQuestionById(id)!;
    });
  }

  getRgb(hex: string) {
    return hexToRgb(hex);
  }

  getDate(date: string) {
    return transformDate(date);
  }

  addResponse() {}
}
