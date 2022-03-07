export enum TaskStatus {
  TODO = "todo",
  INPROGRESS = "inprogress",
  DONE = "done",
}

export interface Task {
  description: string;
  deadline: string;
  status: string;
  assignedUser?: string;
  required: boolean;
  milestone: Milestone;
  team: Team;
}

export interface Milestone {
  label: string;
  color: string;
  title: string;
  description: string;
  artifacts: string[];
  weight: number;
  limit: number;
  deadlineDate: string;
  deadlineHour: string;
  validations: Validation[];
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
