import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { CmailFormGroupModule } from '../cmail-form-group/cmail-form-group.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    CmailFormGroupModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
