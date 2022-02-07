import { Injectable } from "@angular/core";
import { Milestone, Submission } from "../utils/interfaces";

@Injectable({
  providedIn: "root",
})
export class SubmissionService {
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

  mockSubmission: Submission = {
    milestone: "#FF844B",
    validations: [
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
    ],
    finalGrade: 17,
    version: 1,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    submissionDate: "10/05/2022",
    submissionHour: "09:00",
    file: "activity_model.uml",
  };

  constructor() {}

  getMilestones() {
    return this.mockMilestones;
  }

  getSubmission(milestone: string) {
    return milestone === "#FF844B" ? this.mockSubmission : undefined;
  }
}
