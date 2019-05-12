import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpService} from './shared/services/http.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export const createTranslateLoader = (http: HttpClient) => {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [ HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
