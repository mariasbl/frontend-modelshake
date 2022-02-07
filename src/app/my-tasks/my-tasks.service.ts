import { Injectable } from '@angular/core';
import { Milestone, Task, TaskStatus, Team } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MyTasksService {
  mockTeam: Team = {
    id: '1',
    elements: [
      { name: 'Afonso Pereira', email: 'ap@fct.unl.pt', role: 'student' },
      { name: 'Bernardo Pereira', email: 'bp@fct.unl.pt', role: 'student' },
      { name: 'Carlos Pereira', email: 'cp@fct.unl.pt', role: 'student' },
    ],
  };

  mockMilestones: Milestone[] = [
    {
      label: '1º deadline',
      color: '#FF844B',
      title: 'First deadline',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      artifacts: ['state', 'usecase'],
      weight: 50,
      limit: 1000,
      deadlineDate: '10/05/2022',
      deadlineHour: '09:00',
      validations: [
        {
          id: '1',
          type: 'error',
          description: 'Uma atividade não tem um nós inicial',
          artifacts: ['state'],
          file: '',
          sanction: 5,
        },
        {
          id: '2',
          type: 'warning',
          description: 'Uma atividade não tem um nós inicial',
          artifacts: ['usecase'],
          file: '',
          sanction: 5,
        },
      ],
    },
    {
      label: '2º deadline',
      color: '#518099',
      title: 'Second deadline',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      artifacts: ['state', 'usecase'],
      weight: 50,
      limit: 1000,
      deadlineDate: '10/05/2022',
      deadlineHour: '10:00',
      validations: [
        {
          id: '3',
          type: 'error',
          description: 'Uma atividade não tem um nós inicial',
          artifacts: ['state'],
          file: '',
          sanction: 5,
        },
        {
          id: '4',
          type: 'warning',
          description: 'Uma atividade não tem um nós inicial',
          artifacts: ['usecase'],
          file: '',
          sanction: 5,
        },
      ],
    },
  ];

  mockTasks: Task[] = [
    {
      description: 'Interaction concept presentation to stakeholders',
      deadline: '10/05/2022',
      status: TaskStatus.INPROGRESS,
      milestone: this.mockMilestones[0],
      team: this.mockTeam,
      assignedUser: 'ap@fct.unl.pt',
      required: false,
    },
    {
      description: 'Interaction concept presentation to stakeholders',
      deadline: '10/05/2022',
      status: TaskStatus.DONE,
      milestone: this.mockMilestones[0],
      assignedUser: 'ap@fct.unl.pt',
      team: this.mockTeam,
      required: false,
    },
  ];

  constructor() {}

  getMilestones() {
    return this.mockMilestones;
  }

  getTasksByUser(user: string) {
    return this.mockTasks;
  }
}
