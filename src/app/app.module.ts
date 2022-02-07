import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LabelPageComponent } from './components/label-page/label-page.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { QuestionsComponent } from './questions/questions.component';
import { RankingComponent } from './ranking/ranking.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/label/label.component';
import { ButtonComponent } from './components/button/button.component';
import { ActionsComponent } from './components/actions/actions.component';
import { HomePipe } from './home/home.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { TableComponent } from './components/table/table.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LabelPageComponent,
    MyTasksComponent,
    SimulatorComponent,
    SubmissionsComponent,
    QuestionsComponent,
    RankingComponent,
    CalendarComponent,
    ColumnComponent,
    CardComponent,
    LabelComponent,
    ButtonComponent,
    ActionsComponent,
    HomePipe,
    ModalComponent,
    InputComponent,
    DropdownComponent,
    AlertsComponent,
    SeparatorComponent,
    TableComponent,
    CheckboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
