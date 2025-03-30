// scholarship-badge.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scholarship-badge">
      <svg viewBox="0 0 100 100" class="icon-circle">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="gold"
          stroke="#b8860b"
          stroke-width="2"
        />
        <text
          x="50"
          y="58"
          font-size="30"
          text-anchor="middle"
          fill="#8B4513"
          class="font-bold"
        >
          $
        </text>
      </svg>
      <div class="amount">{{ formattedAmount }}</div>
    </div>
  `,
  styles: [
    `
      .scholarship-badge {
        display: flex;
        align-items: center;
        background-color: #fff2c6;
        border-radius: 50px;
        padding-right: 16px;
        margin: 5px;
        width: fit-content;
      }

      .icon-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #f8d57e;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon-circle svg {
        width: 20px;
        height: 20px;
        color: #5b7b9f;
      }

      .amount {
        font-size: 16px;
        padding-right: 20px;
        padding-left: 20px;
        font-weight: 600;
        color: #8a7a42;
      }
    `,
  ],
})
export class PointsIndicatorComponent {
  @Input() amount: number = 0;

  get formattedAmount(): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(this.amount);
  }
}
