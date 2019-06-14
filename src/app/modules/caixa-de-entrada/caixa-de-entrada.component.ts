import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [
    `
    ul,li{
      margin:0;
      padding:0;
      list-style-type:none;
    }
    
    `
  ]
})
export class CaixaDeEntradaComponent implements OnInit{

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  termoParaFiltro: string = '';
 


  constructor(private emailService: EmailService,
    private pageDataService: PageDataService, private headerService: HeaderDataService){}

  ngOnInit(){
    this.emailService.listar()
    .subscribe(
      lista => {
        console.log(lista )
        this.emailList = lista;
      });

      this.pageDataService.defineTitulo('Caixa de Entrada - CMail');
      this.headerService.valorDoFiltro
      .subscribe(novoValor => this.termoParaFiltro = novoValor)
  }

  private _isNewEmailFormOpen = false;



  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    this.emailService.enviar(this.email)
    .subscribe(
      emailApi => {
        //Fazemos todas as outras operações após o OK da API
        this.emailList.push(emailApi)
        this.email = {destinatario: '', assunto:'', conteudo: ''}
        formEmail.reset();
      }
      , erro => console.error(erro)
    )

   //this.emailList.push(this.email)

    //this.email = {
    //  destinatario: '',
    //  assunto: '',
    //  conteudo: ''
    //}

    //formEmail.reset();

  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log('eventoVaiRemover')
    if(eventoVaiRemover.status === 'removing'){
      this.emailService
        .deletar(emailId)
        .subscribe(res => {
          console.log(res);

          //remover o email da lista de demais depois dela ser apagada pela API
          this.emailList = this.emailList.filter(email => email.id != emailId);
        }
        , err => console.error(err)
      )
    }
  }

}
