import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskItem} from "./task.model";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userTask!: TaskItem;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.userTask.id);
  }
}
