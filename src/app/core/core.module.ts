import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { AlertModule } from 'ng2-bootstrap/alert';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

// Hardcode locale to en-AU
const locale = 'en-AU';
import * as moment from 'moment';
moment.locale(locale);

import { SharedModule } from '../shared';

import { AuthConfig } from './auth-config';
import { NavbarComponent } from './navbar';
import { NavbarSearchComponent } from './navbar-search';
import { SidebarComponent } from './sidebar';
import {
  ActService,
  AlertifyService,
  AuthService,
  CampaignService,
  CommentService,
  DeedService,
  FeedService,
  GroupService,
  ModalService,
  StateService,
  TitleService,
  UserService,
} from './services';

@NgModule({
  imports: [
    Ng2UiAuthModule.forRoot(AuthConfig),

    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),

    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: locale },
    ActService,
    AlertifyService,
    AuthService,
    CampaignService,
    CommentService,
    DeedService,
    FeedService,
    GroupService,
    ModalService,
    StateService,
    Title,
    TitleService,
    UserService,
  ],
  declarations: [
    NavbarComponent,
    NavbarSearchComponent,
    SidebarComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only`);
    }
  }
}
