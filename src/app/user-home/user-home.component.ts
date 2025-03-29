import { Component } from '@angular/core';
import { ProfileComponent } from '../shared/profile/profile.component';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { StoreButtonComponent } from '../components/store-button/store-button.component';

@Component({
  selector: 'app-user-home',
  imports: [ProfileComponent, StoreButtonComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {}
