import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { ProfileComponent } from '../shared/profile/profile.component';

import { StoreButtonComponent } from '../components/store-button/store-button.component';
import { StudentService } from '../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-home',
  imports: [ProfileComponent, StoreButtonComponent],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
})
export class StudentHomeComponent implements OnInit {
  studentService = inject(StudentService);
  firestoreService = inject(FirestoreService);
  student_name: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.student_name = params['name'] || 'Invitado';
    });
    this.firestoreService.getStudents().subscribe((students) => {
      // this.studentService.student.set();
    });
  }
}
