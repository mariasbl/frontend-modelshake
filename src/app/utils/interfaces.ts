export enum TaskStatus {
  TODO = "todo",
  INPROGRESS = "in_progress",
  DONE = "done",
}

export enum Roles {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  deadlineDate: string;
  estimate: number;
  status: string;
  assignedUser?: string;
  required: boolean;
  milestone_id: string;
  team_id: string;
}

export interface Milestone {
  _id: string;
  label: string;
  color: string;
  title: string;
  description: string;
  artifacts: string[];
  deadlineDate: string;
  deadlineHour: string;
  weight: number;
  limit?: number;
  campaign_id: string;
}

export interface Validation {
  id: string;
  type: string;
  description: string;
  artifacts: string[];
  file: string;
  sanction: number;
}

export interface ResultValidationSimulator {
  description: string;
  artifacts: string[];
  errorMessage?: string;
  status: string;
}

export interface Submission {
  milestone: string;
  validations: ResultValidationSimulator[];
  finalGrade: number;
  version: number;
  comment: string;
  submissionDate: string;
  submissionHour: string;
  file: string;
}

export interface Team {
  id: string;
  elements: User[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  creationHour: string;
  createdBy: string;
  responses: Response[];
  milestone: Milestone;
}

export interface Response {
  message: string;
  creationDate: string;
  creationHour: string;
  createdBy: string;
}

export interface Event {
  title: string;
  description: string;
  location?: string;
  date: string;
  startHour: string;
  endHour?: string;
  createdBy?: string;
}

export interface Gamification {
  badge: string;
  level: number;
  team: Team;
  grades: Map<string, string>;
  points: number;
}

export interface Authentication {
  username: string;
  password: string;
}
