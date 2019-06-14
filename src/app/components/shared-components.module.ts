import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from '../modules/cmail-form-group/cmail-form-group.component';
import { HeaderComponent } from './header/header.component';
import { CmailFormFieldComponent } from '../modules/cmail-form-group/cmail-form-field/cmail-form-field.component';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [HeaderComponent, CmailListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent,
    CmailListItemComponent]
})
export class SharedComponentsModule { }
