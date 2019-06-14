import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email : '',
    password : ''
  }

  mensagemErro: any;

  constructor(private loginService: LoginService, private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin : NgForm){

      if(formLogin.valid){
        this.loginService
        .logar(this.login)
        .subscribe(
          () => this.roteador.navigate(['/inbox'])
        , (responseError: HttpErrorResponse) => this.mensagemErro = responseError.error
        )
      }
  }

}
