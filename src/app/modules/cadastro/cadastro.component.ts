import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, catchError } from "rxjs/operators";
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
    //bind: retorna uma nova função com retorno diferente
    // forçando  this na hora de executar a funçao será o this do component ( no caso o CadastroComponent)
  })

  mensagensErro: any;

  constructor(private httpClient: HttpClient
    , private roteador: Router) { }

  ngOnInit() {
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);
      this.httpClient.post(environment.baseUrl+'/users', userData)
        .subscribe(
          () => {
            console.log(`Cadastro com sucesso`);
            this.formCadastro.reset();
            

            //após 1 segundo, redireciona para a rota de login
            setTimeout(() => {
              this.roteador.navigate(['']);
            },1000);
          }
          , (responseError: HttpErrorResponse) =>{
            //resposta caso existam erros!
            this.mensagensErro = responseError.error.body
          }
          //erro => console.error(erro)
        )
      //console.log(this.formCadastro.value);
      //this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
      //console.log('Campos precisam ser preenchidos!');
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {

    form.markAllAsTouched();
    // Object.keys(form.controls).forEach(field =>{
    //   const control = form.get(field);
    //   control.markAsTouched({ onlySelf:true });
    // })

  }

  validaImagem(campoDoFormulario: FormControl) {
    //Head - para saber somente se existe e se o link é realmente uma imagem.
    return this.httpClient.head(campoDoFormulario.value, {
      observe: 'response'
    })
      .pipe(
        //função de transformação dos dados
        //null se ok
        //
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
          //executando uma valição para o elemento dentro do map
          //se o response.ok , retorna a urlvalida
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }
}
