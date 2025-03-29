import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { StudentInterface } from '../../user-home/types/student.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore = inject(Firestore);
  studentsCollection = collection(this.firestore, 'students');

  getStudents(): Observable<StudentInterface[]> {
    return collectionData(this.studentsCollection, {
      idField: 'id',
    }) as Observable<StudentInterface[]>;
  }

  updateStudent(
    userId: string,
    dataToUpdate: { xp: number; level: number }
  ): Observable<void> {
    const docRef = doc(this.firestore, 'students/' + userId);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise);
  }
}
