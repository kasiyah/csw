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
  inputCode: string;
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

  run(){
    var editor = <any>document.querySelector(".CodeMirror");
    var editor1 = editor.CodeMirror.getValue();
    console.log(editor1);
    (document.getElementById("output") as HTMLInputElement).value = editor1;
  }
}