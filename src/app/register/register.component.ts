import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { ApiService } from "../utils/api/api";
import { Roles, User } from "../utils/interfaces";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.less"],
})
export class RegisterComponent {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private api: ApiService, private router: Router) {}

  register() {
    const user: any = {
      name: this.name,
      email: this.email,
      role: Roles.STUDENT,
      password: this.password,
    };
    this.api.register(user).pipe(finalize( () => {/*loading = false*/})).subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },
      error: () => {
        /* Toaster */
      },
    });
  }
}
