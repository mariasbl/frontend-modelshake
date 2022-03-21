import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MilestoneComponent } from "./milestone/milestone.component";
import { QuestionComponent } from "./questions/question/question.component";
import { QuestionsComponent } from "./questions/questions.component";
import { RankingComponent } from "./ranking/ranking.component";
import { RegisterComponent } from "./register/register.component";
import { SimulatorComponent } from "./simulator/simulator.component";
import { SubmissionsComponent } from "./submissions/submissions.component";
import { TaskComponent } from "./task/task.component";

const routes: Routes = [
  { path: "calendar", component: CalendarComponent },
  { path: "ranking", component: RankingComponent },
  { path: "questions", component: QuestionsComponent },
  { path: "questions/:id", component: QuestionComponent },
  { path: "submissions", component: SubmissionsComponent },
  { path: "simulator", component: SimulatorComponent },
  { path: "milestone/:id", component: MilestoneComponent },
  { path: "task/:id", component: TaskComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
