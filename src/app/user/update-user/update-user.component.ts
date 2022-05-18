import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiResponse } from 'src/app/model/api.response';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user_id:number;
  user:any;
  apiResponse:ApiResponse;
  constructor(private router:Router,private userService:UserService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user=new User();
    this.user_id=this.route.snapshot.params['user_id'];
    this.userService.getUserById(this.user_id).subscribe({next:
      (data)=>{console.log(data)
      this.user=data;
      console.log(data);},
      error:(error)=>console.log(error)});
    
  }

  onSubmit(){
    this.userService.updateUser(this.user_id,this.user).subscribe({next:
      (data)=>console.log(data),error:(error)=>console.error()});
      this.user=new User();
      this.router.navigate(['/users']);
      console.log(this.user);
      alert("User modified successfully!")
  }
  list(){
    this.router.navigate(['users']);
  }
}
