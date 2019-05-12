import {NgModule} from '@angular/core';
import {HttpService} from '../services/http.service';

@NgModule({
  /**
   * Here we can add modules that we want to share.
   */
  imports: [],
  /**
   * Here we can add components, pipes and directives that we want to share.
   */
  declarations: [],
  /**
   * Here we can add modules, components, pipes and directives that we want to share.
   */
  exports: [],
  /**
   * Here we can add services that we want to share.
   */
  providers: [
    HttpService
  ]
})

/**
 * we added some modules,services,pipes and components here to share them with other modules.
 */
export class SharedModule {
}
