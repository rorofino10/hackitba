import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent {
  @Input() student!: StudentInterface;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<StudentInterface>();

  selectStudent() {
    this.selected.emit(this.student);
  }
}
