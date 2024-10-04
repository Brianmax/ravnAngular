import {Component, EventEmitter, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./user/dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {NgFor, NgIf} from "@angular/common";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, UserComponent, TasksComponent, NgFor, NgIf, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
  users = DUMMY_USERS;
  id?: string;
  get selectedUser() {
    return this.users.find(user => user.id === this.id);
  }
  onSelectedUser(id:string) {
    this.id = id;
  }
}
