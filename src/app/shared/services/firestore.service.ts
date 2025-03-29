import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  query,
  where,
  getDocs,
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

  // async findStudentByName(name: string): Promise<any> {
  //   const usersRef = collection(this.firestore, 'students');
  //   const q = query(usersRef, where("name", "==", name));
  //
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach(doc => {
  //     console.log(doc.id, "=>", doc.data());
  //     return doc.data()
  //   });
  // }

  updateStudent(
    userId: string,
    dataToUpdate: { xp: number; level: number }
  ): Observable<void> {
    const docRef = doc(this.firestore, 'students/' + userId);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise);
  }
}
