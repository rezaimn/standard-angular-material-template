import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


import {SharedModule} from '../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class ProfileModule {}

