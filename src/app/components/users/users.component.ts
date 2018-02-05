import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any; //gets directive matching selecter #userForm
  data: any;
  constructor(private userService: UserService){ 

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
      console.log(this.users);
    });

   }
  ngOnInit() {
    
    }

addUser(formData){
  formData.value.isActive = true;
  formData.value.hide = true;
  formData.value.registered = new Date();
  this.userService.addUser(formData.value);
  console.log(formData.value);
  this.form.reset();
}


}
