import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register_form: FormGroup;

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {

    this.register_form =this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(99) ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(99) ] ]
    });

  }

  register(){
    console.log(this.register_form.value);
  }

}
