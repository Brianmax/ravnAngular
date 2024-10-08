import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../user/dummy-users";
import {DUMMY_TASKS} from "./dummy-tasks"
import {TaskComponent} from "../task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {TaskCreatorComponent} from "../task-creator/task-creator.component";
import {NewTaskData, TaskItem} from "../task/task.model";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NgForOf,
    TaskCreatorComponent,
    NgIf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) id!: string;
  isAddingTask = false;
  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  get selectedUserTask() {
    return this.taskService.getSelectedUserTask(this.id);
  }

  taskHandler(value: boolean) {
    this.isAddingTask = this.taskService.taskHandler(value);
  }
}
