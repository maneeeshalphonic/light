/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { StarterMenuComponent } from './starter/starter.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { AccountsComponent } from './accounts/accounts.component';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
import { EditaccountsComponent } from './editaccounts/editaccounts.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'starter',
      component: StarterMenuComponent,
    },
    {
      path: 'contacts',
      component: ContactsComponent,
    },
    {
      path: 'addcontacts',
      component: AddcontactsComponent,
    },
    {
      path: 'editcontacts',
      component: EditcontactsComponent,
    },
    {
      path: 'editaccounts',
      component: EditaccountsComponent,
    },
    {
      path: 'account',
      component: AccountsComponent,
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
