import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewTaskData, TaskItem} from "../task/task.model";
import {TaskComponent} from "../task/task.component";
import {TaskService} from "../tasks/task.service";

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() close = new EventEmitter<boolean>();
  @Input({required:true}) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  onSubmit() {
     this.taskService.createTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
     }, this.userId);
     this.close.emit(false)
  }
  onCancel() {
    this.close.emit(false);
  }
}
