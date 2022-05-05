import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:UserService) { }

  users:[] = [];

  deleteUser(dId){

    
      this.service.deleteUser(dId).subscribe(res=>{

        console.log(res);
        this.ngOnInit();
      })

  }

  ngOnInit() {

    this.service.getAllUsers().subscribe(data=>{

        this.users = data;
        console.log(this.users);
    })


  }

}
