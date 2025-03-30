import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { ProfileComponent } from '../shared/profile/profile.component';

import { StudentService } from '../shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityButtonComponent } from '../components/activity-button/activity-button.component';
import { LevelIndicatorComponent } from '../components/level-indicator/level-indicator.component';
import { PointsIndicatorComponent } from '../components/points-indicator/points-indicator.component';

@Component({
  selector: 'app-student-home',
  imports: [
    ProfileComponent,
    ActivityButtonComponent,
    LevelIndicatorComponent,
    PointsIndicatorComponent,
  ],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
})
export class StudentHomeComponent implements OnInit {
  studentService = inject(StudentService);
  firestoreService = inject(FirestoreService);
  student_name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.student_name = params['name'] || 'Invitado';
    });
    this.firestoreService.getStudents().subscribe((students) => {
      // this.studentService.student.set();
    });
  }

  goToLeaderBoard() {
    this.router.navigate(['student-home/leaderboard']);
  }
  goToAppearance() {
    this.router.navigate(['student-home/appearance']);
  }
  goToStore() {
    this.router.navigate(['student-home/store']);
  }
}
