import { Component, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { StudentCardComponent } from '../shared/student-card/student-card.component';
import { SelectedStudentCardComponent } from '../shared/selected-student-card/selected-student-card.component';
import { StudentInterface } from '../user-home/types/student.interface';
import { map } from 'rxjs';
@Component({
  selector: 'app-teacher-home',
  imports: [AsyncPipe, StudentCardComponent, SelectedStudentCardComponent],
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css',
})
export class TeacherHomeComponent {
  firestoreService = inject(FirestoreService);
  selectedStudent: StudentInterface | null = null;

  onStudentSelected(student: StudentInterface) {
    this.selectedStudent = student;
  }

  onGiveXp(amount: number) {
    if (this.selectedStudent != null) {
      this.selectedStudent.xp += amount;
      this.firestoreService.updateStudent(
        this.selectedStudent?.id,
        this.selectedStudent
      );
    }
  }

  onGivePoints(amount: number) {
    if (this.selectedStudent != null) {
      this.selectedStudent.points += amount;
      this.firestoreService.updateStudent(
        this.selectedStudent?.id,
        this.selectedStudent
      );
    }
  }
  students_service = inject(FirestoreService);

  students$ = this.students_service.getStudents();
  avgLvl$ = this.students$.pipe(
    map((students) => {
      if (!students || students.length === 0) return 0;
      const sum = students.reduce((total, student) => total + student.level, 0);
      return sum / students.length;
    })
  );

  median$ = this.students$.pipe(
    map((students) => {
      if (!students || students.length === 0) return 0;

      // Create a sorted copy of levels
      const levels = students.map((s) => s.level).sort((a, b) => a - b);
      const middle = Math.floor(levels.length / 2);

      // Calculate median
      return levels.length % 2 !== 0
        ? levels[middle]
        : (levels[middle - 1] + levels[middle]) / 2;
    })
  );
}
