import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user:User= new User();
  submitted=false;
  name:any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
 this.submitted=true;
 this.userService.createUser(this.user).subscribe({next:
   (data)=>console.log(data),error:(error)=>console.log(error)});
   this.user=new User();
   this.router.navigate(['/users']);
   console.log(this.user);
   alert("User added successfully");
   }
}
