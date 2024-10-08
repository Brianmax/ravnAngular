import { Injectable } from '@angular/core';
import {DUMMY_TASKS} from "./dummy-tasks";
import {NewTaskData} from "../task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = DUMMY_TASKS;
  constructor() {
    const tasks =  localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getSelectedUserTask(id: string) {
    return this.tasks.filter(task=>task.userId === id);
  }

  taskHandler(value: boolean) {
    return value;
  }

  createTask(taskCreate: NewTaskData, id: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: id,
      title: taskCreate.title,
      summary: taskCreate.summary,
      dueDate: taskCreate.dueDate,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task=>task.id !== id);
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
