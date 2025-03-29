import { Component, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { StudentCardComponent } from '../shared/student-card/student-card.component';
@Component({
  selector: 'app-teacher-home',
  imports: [AsyncPipe, StudentCardComponent],
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css',
})
export class TeacherHomeComponent {
  students_service = inject(FirestoreService);

  students$ = this.students_service.getStudents();
}
