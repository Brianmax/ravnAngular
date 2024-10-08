import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskItem} from "./task.model";
import {TaskService} from "../tasks/task.service";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userTask!: TaskItem;
  @Input({required:true}) idTask!: string;
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }
  onComplete(id: string) {
    this.taskService.removeTask(id);
    console.log('Task completed', id);
  }
}
