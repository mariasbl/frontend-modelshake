import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { QuestionsComponent } from './questions/questions.component';
import { RankingComponent } from './ranking/ranking.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { SubmissionsComponent } from './submissions/submissions.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: 'my-tasks', component: MyTasksComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
