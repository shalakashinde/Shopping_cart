import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      'email': new FormControl(null, [ Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    // this.loginForm = new FormGroup({
    //   // 'username': new  FormControl(null, Validators.required),
    //   'email': new FormControl(null, [ Validators.required, Validators.email]),
    //   'password': new FormControl(null, Validators.required)
    // });
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
