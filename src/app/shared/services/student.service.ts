import { Injectable, inject, signal, computed } from '@angular/core';
import { StudentInterface } from '../../user-home/types/student.interface';
import { FirestoreService } from './firestore.service';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student = signal<StudentInterface>({
    id: '',
    img: '',
    level: 1,
    name: '',
    xp: 0,
    points: 0,
  });
  // maxExp: number = 0;
  // maxExp = signal(this.calculateMaxExp(1))
  maxExp = computed(() => this.calculateMaxExp(this.student().level));

  firestoreService = inject(FirestoreService);

  constructor() {}

  updateLevel(): void {
    this.student.update((current) => {
      const l = current.level + 1;
      const x = current.xp - this.calculateMaxExp(current.level);
      console.log(l, x, current.xp, this.calculateMaxExp(current.level));
      return { ...current, level: l, xp: x };
    });

    this.firestoreService.updateStudent(this.student().id, this.student());

    // this.maxExp.set(this.calculateMaxExp(this.student().level))
  }

  private calculateMaxExp(level: number): number {
    return Math.round(100 * 1.5 ** (level - 1)); // Redondea para evitar decimales raros
  }
}
