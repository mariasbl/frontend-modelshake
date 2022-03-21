import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  constructor(private router: Router) {}

  routesUnauthenticated = ["login", "register"];

  unauthenticated() {
    return this.routesUnauthenticated.some((route) =>
      this.router.url.includes(route)
    );
  }
}

/*******TODO********/
/*
->  Submissions Page - Final Grade Circle and Modal to submit new file
->  Questions Page - Filter Milestone
->  
*/
