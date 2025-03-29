import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from "@angular/fire/firestore";
import { Observable, from } from 'rxjs';
import { UserInterface } from '../../user-home/types/user.interface'

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');

  getUsers(): Observable<UserInterface[]> {
    return collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<UserInterface[]>;
  }

  uptdateUser(userId: string, dataToUpdate: {xp: number, level: number}): Observable<void> {
    const docRef = doc(this.firestore, 'users/' + userId);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise)
  }
}
