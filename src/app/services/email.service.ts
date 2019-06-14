import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmailService {

    api = environment.baseUrl + '/emails';
    cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') });

    constructor(private http: HttpClient) {
        (emailApi: any) => {
            return new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at,
                id: emailApi.id
            })
        }
    }

    enviar({ destinatario, assunto, conteudo }) {
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }

        return this.http.post(this.api, emailParaApi, { headers: this.cabecalho })
            .pipe<Email>(
                map(
                    (emailApi: any) => {
                        return new Email({
                            destinatario: emailApi.to,
                            assunto: emailApi.subject,
                            conteudo: emailApi.content,
                            dataDeEnvio: emailApi.created_at,
                            id: emailApi.id
                        })
                    }
                )
            )
    }

    listar() {
        return this.http
            .get(this.api, { headers: this.cabecalho })
            .pipe<Email[]>(
                map((listaEmailApi: any[]) => {
                    return listaEmailApi.map(
                        (emailApi: any) => {
                            return new Email({
                                destinatario: emailApi.to,
                                assunto: emailApi.subject,
                                conteudo: emailApi.content,
                                dataDeEnvio: emailApi.created_at,
                                id: emailApi.id
                            })
                        });
                })
            )



    }

    deletar(id){
        return this.http.delete(`${this.api}/${id}`,{headers:this.cabecalho});
    }
}