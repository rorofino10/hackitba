import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../interfaces/student'; // Assuming you have a Student interface

@Component({
  selector: 'app-selected-student-card',
  standalone: true,
  templateUrl: './selected-student-card.component.html',
  styleUrls: ['./selected-student-card.component.css'],
})
export class SelectedStudentCardComponent {
  @Input() student: Student | null = null;
  @Output() giveXp = new EventEmitter<number>();
  @Output() givePoints = new EventEmitter<number>();

  xpAmounts = [10, 50, 100];
  pointAmounts = [5, 10, 20];

  onGiveXp(amount: number) {
    this.giveXp.emit(amount);
  }

  onGivePoints(amount: number) {
    this.givePoints.emit(amount);
  }
}
