import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  registered = false;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(Validators.required),
      'email': new FormControl([Validators.required, Validators.email]),
      'password': new FormControl([Validators.required, Validators.minLength(4)]),
      'mob_no': new FormControl(['', Validators.required])
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid === true)	{

      return;
    } else {
      this.registered = true;
    }

  }
}
