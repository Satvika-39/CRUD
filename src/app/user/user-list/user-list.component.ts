import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((res:any)=>{
      this.users=res;
    });
  }
deleteUser(user_id:number){
 this.userService.deleteUser(user_id).subscribe({
   next:(data)=>{console.log(data);
   this.userService.getUser().subscribe(data=>{this.users=data});},
 error:(error)=> console.log(error)});
 alert("User deleted successfully")
}
updateUser(user_id:number){
  this.router.navigate(['update',user_id]);
}
}
