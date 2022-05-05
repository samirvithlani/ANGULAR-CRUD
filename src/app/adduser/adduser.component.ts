import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service:UserService) { }

  userGroup = new FormGroup(
    {
      name:new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    }
  )
  submit(){

    this.service.addUser(this.userGroup.value).subscribe(res=>{
      console.log(res);
    })

  }
  ngOnInit() {
  }

}
