import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../../user-home/types/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSig = signal<UserInterface[]>([]);

  constructor() { }
}
