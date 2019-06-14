import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { CmailFormGroupModule } from '../cmail-form-group/cmail-form-group.module';
import { CadastroRoutingModule } from './cadastro-routing/cadastro-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    CmailFormGroupModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
