import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelAddTask = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<NewTaskData> ();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAddTask() {
    this.cancelAddTask.emit(false);
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
