// scholarship-badge.component.ts
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../shared/services/student.service';

@Component({
  selector: 'app-points-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <div
      class="bg-[#fff2cc] w-20 h-5 rounded-full flex bold items-center justify-even"
    >
      <img src="coin.png" alt="Moneda" class="coin-icon" />
      {{ studentService.student().points }}
    </div> -->

    <div
      class="group w-30 h-fit p-4 flex flex-row items-center justify-between font-bold bold  bg-[#ffe4a6]"
    >
      <img class="pl-5" src="coin.png" />
      <div class="bold font-bold text-lg pr-5">
        {{ studentService.student().points }}
      </div>
    </div>
  `,
})
export class PointsIndicatorComponent {
  studentService = inject(StudentService);
}
