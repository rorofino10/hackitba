import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnChanges {
  @Input() currentExp: number = 75;
  @Input() maxExp: number = 100;
  @Input() level: number = 5;

  levelUp = false;
  confetti = Array(50).fill(0); // More confetti pieces

  get expPercentage(): number {
    return Math.min(100, (this.currentExp / this.maxExp) * 100);
  }

  getConfettiStyle(index: number) {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 2;
    const size = 8 + Math.random() * 8;

    return {
      background: colors[index % colors.length],
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      'animation-delay': `${animationDelay}s`,
      'border-radius': Math.random() > 0.5 ? '50%' : '2px',
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['currentExp'] &&
      changes['currentExp'].currentValue >= this.maxExp &&
      changes['currentExp'].previousValue < this.maxExp
    ) {
      this.triggerLevelUp();
    }
  }

  triggerLevelUp() {
    this.levelUp = true;
    setTimeout(() => (this.levelUp = false), 4000); // Longer celebration
  }
}
