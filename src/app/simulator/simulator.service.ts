import { Injectable } from "@angular/core";
import {
  Milestone,
  ResultValidationSimulator,
  Team,
} from "../utils/interfaces";

@Injectable({
  providedIn: "root",
})
export class SimulatorService {
  mockTeam: Team = {
    id: "1",
    elements: [
      { name: "Afonso Pereira", email: "ap@fct.unl.pt", role: "student" },
      { name: "Bernardo Pereira", email: "bp@fct.unl.pt", role: "student" },
      { name: "Carlos Pereira", email: "cp@fct.unl.pt", role: "student" },
    ],
  };

  mockMilestones: Milestone[] = [
    {
      label: "1º deadline",
      color: "#FF844B",
      title: "First deadline",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      artifacts: ["state", "usecase"],
      weight: 50,
      limit: 1000,
      deadlineDate: "10/05/2022",
      deadlineHour: "09:00",
      validations: [
        {
          id: "1",
          type: "warning",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 2,
        },
        {
          id: "2",
          type: "warning",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 5,
        },
        {
          id: "3",
          type: "error",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 2,
        },
        {
          id: "4",
          type: "error",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 5,
        },
      ],
    },
    {
      label: "2º deadline",
      color: "#518099",
      title: "Second deadline",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      artifacts: ["state"],
      weight: 50,
      limit: 1000,
      deadlineDate: "10/05/2022",
      deadlineHour: "10:00",
      validations: [
        {
          id: "1",
          type: "warning",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 2,
        },
        {
          id: "2",
          type: "warning",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 5,
        },
        {
          id: "3",
          type: "error",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 2,
        },
        {
          id: "4",
          type: "error",
          description: "Uma atividade não tem um nós inicial",
          artifacts: ["state"],
          file: "file",
          sanction: 5,
        },
      ],
    },
  ];

  mockResultValidationSimulator: ResultValidationSimulator[] = [
    {
      description: "Uma atividade não tem um nós inicial",
      artifacts: ["state"],
      status: "passed",
    },
    {
      description: "Uma atividade não tem um nós inicial",
      artifacts: ["state"],
      status: "passed",
    },
    {
      description: "Uma atividade não tem um nós inicial",
      artifacts: ["state"],
      errorMessage: "Error message not available",
      status: "error",
    },
    {
      description: "Uma atividade não tem um nós inicial",
      artifacts: ["state"],
      errorMessage: "Error message long message not available",
      status: "warning",
    },
  ];

  mockResultVerification: string =
    "Validation Errors = 0\\n\\n[[LTL and CTL symbols:\\nG = must always happen\\nF = must happen somewhere in the future\\nX = must happen immediately next\\nEF = must be reached in at least one case]]\\n\\nModel passed\\n\\n";

  constructor() {}

  getMilestones() {
    return this.mockMilestones;
  }

  runVerificationSimulator() {
    return this.mockResultVerification;
  }

  runValidationSimulator() {
    return this.mockResultValidationSimulator;
  }
}
