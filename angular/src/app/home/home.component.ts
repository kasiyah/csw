import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  localUser;
  codeIn: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.localUser = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  func(){
    this.codeIn = ((document.getElementById("code") as HTMLInputElement).value);
    console.log(this.codeIn)
  }
}