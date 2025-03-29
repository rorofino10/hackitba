import { Component, OnInit, inject } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service'
import { UserService } from '../shared/services/user.service'

@Component({
  selector: 'app-user-home',
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  userService = inject(UserService)
  firestoreService = inject(FirestoreService);

  ngOnInit(): void {
    this.firestoreService.getUsers().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
      complete: () => console.log("finished")
    });
  }
}
