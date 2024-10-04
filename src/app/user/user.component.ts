import {Component, Input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS} from "./dummy-users";
import {User} from "./user.model";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelected() {
    this.select.emit(this.user.id)
  }
}
