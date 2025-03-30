import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
  signal,
  DoCheck,
  computed,
} from '@angular/core';
// import { FirestoreService } from '../services/firestore.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
// export class ProfileComponent implements OnChanges {
export class ProfileComponent implements DoCheck {
  studentService = inject(StudentService);
  // @Input() currentExp: number = 75;
  // @Input() maxExp: number = 100;
  // @Input() level: number = 5;

  levelUp = false;
  confetti = Array(50).fill(0); // More confetti pieces

  // currentExp = this.studentService.student().xp
  // maxExp = this.studentService.maxExp

  // Usando directamente la señal de XP desde student()
  currentExp = computed(() => this.studentService.student().xp);

  // Usando directamente la señal maxExp
  maxExp = this.studentService.maxExp;

  expPercentage = computed(() =>
    Math.min(100, (this.currentExp() / this.maxExp()) * 100)
  );
  // expPercentage = this.currentExp.pipe(
  //   map(exp => Math.min(100, (exp / this.maxExp()) * 100))
  // );

  // getConfettiStyle(index: number) {
  //   const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
  //   const left = Math.random() * 100;
  //   const animationDelay = Math.random() * 2;
  //   const size = 8 + Math.random() * 8;
  //
  //   return {
  //     background: colors[index % colors.length],
  //     left: `${left}%`,
  //     width: `${size}px`,
  //     height: `${size}px`,
  //     'animation-delay': `${animationDelay}s`,
  //     'border-radius': Math.random() > 0.5 ? '50%' : '2px',
  //   };
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (
  //     changes['currentExp'] &&
  //     changes['currentExp'].currentValue >= this.studentService.maxExp &&
  //     changes['currentExp'].previousValue < this.studentService.maxExp
  //   ) {
  //     this.triggerLevelUp();
  //   }
  // }

  levelUpTimeout() {
    setTimeout(() => (this.levelUp = false), 4000); // Longer celebration
  }

  triggerLevelUp() {
    if (this.currentExp() >= this.maxExp()) {
      // console.log(this.currentExp(), this.maxExp)
      this.levelUp = true;
      this.levelUpTimeout();
      this.studentService.updateLevel();
    }
  }

  ngDoCheck() {
    console.log(this.currentExp(), this.maxExp);

    // Verifica si la XP alcanzó el máximo
    if (this.currentExp() >= this.maxExp()) {
      this.triggerLevelUp();
    }
  }

  // ngOnInit() {
  //   if (this.currentExp >= this.maxExp) {
  //     this.triggerLevelUp(); // Activa el levelUp si la XP alcanza el máximo
  //   }
  // }
}
