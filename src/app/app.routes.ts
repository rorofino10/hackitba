import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StoreComponent } from './user-home/store/store.component';
import { StudentHomeComponent } from './user-home/student-home.component';
import { LeaderboardComponent } from './user-home/leaderboard/leaderboard.component';
import { AppearanceComponent } from './user-home/appearance/appearance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-home', component: StudentHomeComponent },
  { path: 'student-home/store', component: StoreComponent },
  { path: 'student-home/leaderboard', component: LeaderboardComponent },
  { path: 'student-home/appearance', component: AppearanceComponent },
  { path: 'teacher-home', component: TeacherHomeComponent },
];
