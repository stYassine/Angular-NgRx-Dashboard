import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    public cookie_service: CookieService
  ) { }

  set_token(token){
    this.cookie_service.set('token', token);
  }

  get_token(){
    return this.cookie_service.get('token');
  }

  delete_token(){
    this.cookie_service.delete('token');
  }

  get_payload(){

    const token =this.get_token();

    let payload;

    if(token){
      payload =token.split('.')[1];
      payload =JSON.parse(window.atob(payload));
    }

    return payload;

  }


}
