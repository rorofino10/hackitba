import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css',
})
export class BackButtonComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back(); // Goes back in history
    // OR navigate up one level:
    // const currentUrl = this.router.url;
    // const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    // this.router.navigate([parentUrl]);
  }
}
