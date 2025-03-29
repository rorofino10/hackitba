import { Injectable, signal } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student = signal<StudentInterface>({
    id: '',
    img: '',
    level: 0,
    name: '',
    xp: 0,
  });

  constructor() {}
}
