import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Authentication, Milestone, Task, Team, User } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  backendURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  login(authentication: Authentication) {
    return of("Bearer 3948908029365465475");
  }

  register(user: User) {
    console.log(user);
    return of(user);
  }

  getMilestonesByCampaign(campaign_id: string) {
    return this.http.get<Milestone[]>(
      this.backendURL + "milestone/campaign/" + campaign_id
    );
  }

  getMilestoneById(milestone_id: string): Observable<Milestone> {
    return this.http.get<Milestone>(
      this.backendURL + "milestone/" + milestone_id
    );
  }

  getTasksByTeam(team_id: string) {
    return this.http.get<Task[]>(this.backendURL + "task/team/" + team_id);
  }

  getTaskById(task_id: any) {
    return this.http.get<Task>(this.backendURL + "task/" + task_id);
  }

  getUserById(user_id: string): Observable<User> {
    return this.http.get<User>(this.backendURL + "user/" + user_id);
  }

  getTeamById(team_id: string) {
    return this.http.get<Team>(this.backendURL + "team/" + team_id);
  }

  updateTaskStatus(task_id: string, status: string) {
    return this.http.post(this.backendURL + "task/" + task_id + "/status", { status });
  }
}
