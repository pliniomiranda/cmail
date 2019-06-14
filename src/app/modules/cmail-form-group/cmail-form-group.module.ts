import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-field/cmail-form-field.directive';

@NgModule({
  declarations: [CmailFormGroupComponent,CmailFormFieldDirective],
  imports: [
    CommonModule
  ],
  exports:  [CmailFormGroupComponent,CmailFormFieldDirective]
})
export class CmailFormGroupModule { }
