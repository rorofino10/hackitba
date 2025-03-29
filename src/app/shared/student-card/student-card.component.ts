import { Component, Input } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css',
})
export class StudentCardComponent {
  @Input({ required: true }) student!: StudentInterface;
}
