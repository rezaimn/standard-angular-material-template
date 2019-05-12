import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';

import {SharedModule} from '../shared/modules/shared.module';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HeaderComponent} from './shared/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule

  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent
  ],

})
export class LayoutModule {
}
