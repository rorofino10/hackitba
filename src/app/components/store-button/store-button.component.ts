import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-button',
  templateUrl: './store-button.component.html',
  styleUrls: ['./store-button.component.css'],
})
export class StoreButtonComponent {
  @Input() text: string = '';
  @Input() rewardCount: number = 0; // New reward counter input

  constructor(private router: Router) {}

  navigateToStore(path: string) {
    this.router.navigate([path]);
    // Play reward animation if rewards available
    if (this.rewardCount > 0) {
      this.triggerRewardAnimation();
    }
  }

  triggerRewardAnimation() {
    // Add any reward claim logic here
  }
}
