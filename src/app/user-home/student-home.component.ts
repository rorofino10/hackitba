import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { ProfileComponent } from '../shared/profile/profile.component';
import { StudentInterface } from "./types/student.interface";

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

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.studentService.student().name = params['name'] || 'Guest Student';
    });
    this.firestoreService.getStudents().subscribe((students) => {
      students.forEach(student => {
        if (student.name == this.studentService.student().name) {
          this.studentService.student.set(student);
          this.studentService.maxExp = 100 * (1.5 ** (this.studentService.student().level - 1))
        }
      });
    });
  }
}
