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
    this.inputCode = ((document.getElementById("codeInput") as HTMLInputElement).value);
    console.log(this.inputCode)
  }

  run2(){
    var editor = <any>document.querySelector(".CodeMirror");
    var editor1 = editor.CodeMirror.getValue();
    //var testVal = (document.getElementById("codeInput") as HTMLInputElement);
    //var inputBox = <HTMLInputElement>document.getElementById("codeMirror").children.item(0);
    //this.inputCode = inputBox.value;
    //var text = testVal.value;
    console.log(editor1)
  }
}