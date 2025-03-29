import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service'
import { UserService } from '../shared/services/user.service'
import { ProfileComponent } from '../shared/profile/profile.component';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { StoreButtonComponent } from '../components/store-button/store-button.component';

@Component({
  selector: 'app-user-home',
  imports: [ProfileComponent, StoreButtonComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent implements OnInit {
  userService = inject(UserService)
  firestoreService = inject(FirestoreService);

  ngOnInit(): void {
    this.firestoreService.getUsers().subscribe(users => {
       this.userService.userSig.set(users)
    });
  }
}
