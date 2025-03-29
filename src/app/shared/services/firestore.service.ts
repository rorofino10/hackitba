import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { UserInterface } from '../../user-home/types/user.interface'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');

  getUsers(): Observable<UserInterface[]> {
    return collectionData(this.usersCollection, {
      idField: 'id'
    }) as Observable<UserInterface[]>;
  }
}
