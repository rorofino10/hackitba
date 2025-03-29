import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StoreComponent } from './user-home/store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'teacher-home', component: TeacherHomeComponent },
  { path: 'user-home/store', component: StoreComponent },
];
