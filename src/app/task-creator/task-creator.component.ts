import {Component, EventEmitter, Output} from '@angular/core';
import {TaskItem} from "../task/task.model";

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() createTask = new EventEmitter<TaskItem>;
  @Output() cancel = new EventEmitter<boolean>();
  onCrateTask() {
    this.createTask.emit(
    );
  }

  onCancel() {
    this.cancel.emit(false);
  }
}
