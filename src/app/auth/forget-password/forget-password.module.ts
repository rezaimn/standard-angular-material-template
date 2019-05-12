import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ForgetPasswordRoutingModule],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule {}
