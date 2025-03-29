import { Component, Input } from '@angular/core';
import { UserInterface } from '../../user-home/types/user.interface';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css',
})
export class StudentCardComponent {
  @Input({ required: true }) student!: UserInterface;
}
