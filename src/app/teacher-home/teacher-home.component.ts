import { Component, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { StudentCardComponent } from '../shared/student-card/student-card.component';
import { SelectedStudentCardComponent } from '../shared/selected-student-card/selected-student-card.component';
import { StudentInterface } from '../user-home/types/student.interface';
@Component({
  selector: 'app-teacher-home',
  imports: [AsyncPipe, StudentCardComponent, SelectedStudentCardComponent],
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css',
})
export class TeacherHomeComponent {
  selectedStudent: StudentInterface | null = null;

  onStudentSelected(student: StudentInterface) {
    this.selectedStudent = student;
  }

  onGiveXp(amount: number) {}

  onGivePoints(amount: number) {}
  students_service = inject(FirestoreService);

  students$ = this.students_service.getStudents();
}
