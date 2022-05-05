import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {
    path: 'adduser', component: AdduserComponent
  },
  {
    path: 'edituser/:id', component: EdituserComponent,
  },
  {
    path: 'viewuser', component: UserlistComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
