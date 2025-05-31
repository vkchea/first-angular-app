import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task)=> task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
