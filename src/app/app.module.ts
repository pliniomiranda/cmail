import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app-routing.module';
import { CmailFormFieldComponent } from './modules/cmail-form-group/cmail-form-field/cmail-form-field.component'
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from "./components/shared-components.module";
import { filtroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CaixaDeEntradaComponent,
    CmailFormFieldComponent,
    filtroPorAssunto
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    SharedComponentsModule,
    HttpClientModule //Importamos HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
