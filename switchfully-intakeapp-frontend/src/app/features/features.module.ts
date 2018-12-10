import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutingModule } from '../routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [
HomepageComponent,
CampaignsComponent,
  ],
  imports: [
    CoreModule,
    RoutingModule
  ]
})
export class FeaturesModule { }