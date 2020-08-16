/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesMenu } from './pages-menu';
import { NbMenuModule,NbLayoutModule,NbPopoverModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { StarterMenuModule } from './starter/starter.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { GetcontactsService } from './getcontacts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
import { EditaccountsComponent } from './editaccounts/editaccounts.component';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    StarterMenuModule,
    ThemeModule,
    NbPopoverModule,
    NbLayoutModule,
    NbMenuModule,
    
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ContactsComponent,
    AddcontactsComponent,
    AccountsComponent,
    CreateaccountComponent,
    EditcontactsComponent,
    EditaccountsComponent,
  ],
  providers: [
    PagesMenu,GetcontactsService
  ],
})
export class PagesModule {
}
