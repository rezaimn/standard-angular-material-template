import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {}
