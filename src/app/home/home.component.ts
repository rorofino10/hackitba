import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateToTarget(path: string) {
    // You can add additional logic here before navigating
    this.router.navigate([path]);

    // Alternative with query params:
    // this.router.navigate(['/target-route'], { queryParams: { id: 123 } });
  }
}
