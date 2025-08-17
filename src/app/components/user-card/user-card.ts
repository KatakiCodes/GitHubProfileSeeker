import { Component, Input } from '@angular/core';
import { User } from '../../Models/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  @Input() user: User | null;
}
