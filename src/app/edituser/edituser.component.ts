import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:UserService) { }

  id:number;
  user:any;

  userGroup = new FormGroup(
    {
      dName:new FormControl(),
      dEmail: new FormControl(),
      dAge:new FormControl(),
      dExp:new FormControl(),
    }
  )

  submit(){
    this.service.updateUser(this.id,this.userGroup.value).subscribe(res=>{

      console.log(res);
    })

  }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(data=>{

      this.user = data;
      console.log(this.user);
    })
  }

}
