import { Injectable } from "@angular/core";
import { Gamification, Milestone } from "../utils/interfaces";

@Injectable({
  providedIn: "root",
})
export class RankingService {
  mockGrade: Map<string, string> = new Map();
  mockRanking: any[] = [];

  mockMilestones: any[] = [
    {
      _id: "",
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
      _id: "",
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

  constructor() {
    this.mockGrade.set("#FF844B", "15/17");
    this.mockGrade.set("#518099", "14/17");
    this.mockRanking = [
      {
        badge: "pi-globe",
        level: 10,
        team: {
          id: "1",
          elements: [
            { name: "Afonso Pereira", email: "ap@fct.unl.pt", role: "student" },
            {
              name: "Bernardo Pereira",
              email: "bp@fct.unl.pt",
              role: "student",
            },
            { name: "Carlos Pereira", email: "cp@fct.unl.pt", role: "student" },
          ],
        },
        grades: this.mockGrade,
        points: 200,
      },
      {
        badge: "pi-star",
        level: 9,
        team: {
          id: "2",
          elements: [
            { name: "Afonso Pereira", email: "ap@fct.unl.pt", role: "student" },
            {
              name: "Bernardo Pereira",
              email: "bp@fct.unl.pt",
              role: "student",
            },
            { name: "Carlos Pereira", email: "cp@fct.unl.pt", role: "student" },
          ],
        },
        grades: this.mockGrade,
        points: 150,
      },
    ];
  }

  getRanking() {
    return this.mockRanking;
  }

  getMilestones() {
    return this.mockMilestones;
  }
}
