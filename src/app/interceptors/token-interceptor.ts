import { Injectable } from '@angular/core';

import { TokenService } from '../services/token.service';

import { HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        public token_service: TokenService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        const headers_config ={
            'Content-Type': 'application/json',
            Accept : 'application/json'
        }

        const token =this.token_service.get_token();

        if(token){
            headers_config['Authorization'] =`Bearer ${token}`;
        }

        const _req =req.clone({ setHeaders: headers_config });

        return next.handle(_req);
        
    };
    

}