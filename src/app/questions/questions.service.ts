import { Injectable } from "@angular/core";
import { Question } from "../utils/interfaces";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  mockQuestions: any[] = [
    {
      id: "1",
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      creationDate: "23/05/2022",
      creationHour: "09:00",
      createdBy: "João Sousa",
      responses: [
        {
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          creationDate: "23/05/2022",
          creationHour: "09:00",
          createdBy: "Carlos Sousa",
        },
      ],
      milestone: {
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
    },
    {
      id: "2",
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      creationDate: "23/05/2022",
      creationHour: "09:00",
      createdBy: "João Sousa",
      responses: [
        {
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          creationDate: "23/05/2022",
          creationHour: "09:00",
          createdBy: "Carlos Sousa",
        },
      ],
      milestone: {
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
    },
  ];

  constructor() {}

  getQuestions() {
    return this.mockQuestions;
  }

  getQuestionById(id: string) {
    return this.mockQuestions.find((q) => q.id === id);
  }
}
