export class Email{

    destinatario = '';
    assunto = '';
    conteudo = '';
    dataDeEnvio = '';
    id = '';//Propriedade Id


    constructor({destinatario,assunto,conteudo,dataDeEnvio,id}: {destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string, id: string}
        ){
            this.destinatario = destinatario;
            this.assunto = assunto;
            this.conteudo = conteudo;
            this.dataDeEnvio = dataDeEnvio;
            this.id = id;
    }

    get introducaoDoConteudo(){
        return this.conteudo.substring(0,140)+'...'
    }
}