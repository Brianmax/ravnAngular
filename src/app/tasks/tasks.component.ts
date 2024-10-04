import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../user/dummy-users";
import {DUMMY_TASKS} from "./dummy-tasks"
import {TaskComponent} from "../task/task.component";
import {NgForOf, NgIf} from "@angular/common";
import {TaskCreatorComponent} from "../task-creator/task-creator.component";

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
  users = DUMMY_USERS;
  @Input({required:true}) name!: string;
  @Input({required:true}) id!: string;
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get selectedUserTask() {
    return this.tasks.filter(task=>task.userId === this.id);
  }

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(task=>task.id !== id)
    console.log('Task completed', id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }
}
