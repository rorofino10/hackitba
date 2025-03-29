import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { ProfileComponent } from '../shared/profile/profile.component';

import { StoreButtonComponent } from '../components/store-button/store-button.component';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student-home',
  imports: [ProfileComponent, StoreButtonComponent],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
})
export class StudentHomeComponent implements OnInit {
  studentService = inject(StudentService);
  firestoreService = inject(FirestoreService);

  ngOnInit(): void {
    this.firestoreService.getStudents().subscribe((students) => {
      // this.studentService.student.set();
    });
  }
}
