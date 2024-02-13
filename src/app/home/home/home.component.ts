import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/core/interface/user';
import { HomeService } from 'src/app/shared/core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  userList: User[] = []



  constructor(private _home: HomeService) { }


  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this._home.getUsers()
      .then((res) => {
        this.userList= res
      }).catch((err) => {
        console.log(err)
      })
  }
}
