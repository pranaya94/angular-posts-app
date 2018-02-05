import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [ 
      {
          firstName: 'John',
          lastName: 'Doe',
          email: 'jdoe@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kjohn@gmail.com',
        isActive: false,        
        registered: new Date('01/5/2015 09:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'kwill@gmail.com',
        isActive: true,          
        registered: new Date('01/07/2016 09:30:00'),
        hide: true
      }
    ];
    
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}

