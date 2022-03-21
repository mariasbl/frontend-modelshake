import { Component } from "@angular/core";
import { ApiService } from "../utils/api/api";
import { Authentication } from "../utils/interfaces";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(
    private api: ApiService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login() {
    const credentials: Authentication = {
      username: this.username,
      password: this.password,
    };
    this.api
      .login(credentials)
      .pipe(
        finalize(() => {
          /*loading = false*/
        })
      )
      .subscribe({
        next: (jwt) => {
          //localStorage.setItem("jwt", jwt);
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
          this.router.navigate(["/home"]);
        },
        error: () => {
          /* toast with error */
        },
      });
  }
}
