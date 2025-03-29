import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StoreComponent } from './user-home/store/store.component';
import { StudentHomeComponent } from './user-home/student-home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-home', component: StudentHomeComponent },
  { path: 'student-home/store', component: StoreComponent },
  { path: 'student-home/leaderboard', component: StoreComponent },
  { path: 'teacher-home', component: TeacherHomeComponent },
];
