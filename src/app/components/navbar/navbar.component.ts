import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  tabs: { icon: string; label: string; route: string }[] = [
    { icon: 'pi-home', label: 'Home', route: 'home' },
    { icon: 'pi-list', label: 'My tasks', route: 'my-tasks' },
    { icon: 'pi-check', label: 'Simulator', route: 'simulator' },
    { icon: 'pi-upload', label: 'Submissions', route: 'submissions' },
    { icon: 'pi-question-circle', label: 'Questions', route: 'questions' },
    { icon: 'pi-list', label: 'Ranking', route: 'ranking' },
    { icon: 'pi-calendar', label: 'Calendar', route: 'calendar' },
  ];

  currentTab!: string;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.tabEvent.subscribe((tab) => (this.currentTab = tab));
  }
}
