import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AppService } from "src/app/app.service";
import { navbarTabsConfig } from "src/app/utils/config/config";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.less"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  tabs = navbarTabsConfig;

  currentTab!: string;
  subscription!: Subscription;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.appService.tab$.subscribe((tab) => {
      this.currentTab = tab;
      setTimeout(() => {}, 0);
    });
  }

  logout() {
    //localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
