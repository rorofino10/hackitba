import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';

@Component({
  selector: 'app-selected-student-card',
  standalone: true,
  templateUrl: './selected-student-card.component.html',
  styleUrls: ['./selected-student-card.component.css'],
})
export class SelectedStudentCardComponent {
  @Input() student: StudentInterface | null = null;
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
