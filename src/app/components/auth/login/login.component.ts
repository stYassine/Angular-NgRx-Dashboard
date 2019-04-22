import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public auth_service: AuthService,
    public token_service: TokenService
  ) { }

  ngOnInit() {

    this.login_form =this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(99) ]]
    });

    
  }

  login(){
    
    

  }

}
