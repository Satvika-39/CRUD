import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'add',component:CreateUserComponent},
  {path:'users',component:UserListComponent},
  {path:'update/:user_id',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
