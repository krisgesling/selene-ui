/*! *****************************************************************************
SPDX-License-Identifier: Apache-2.0


Copyright (c) Mycroft AI Inc. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountResolverService } from './core/guards/account-resolver.service';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MaintenancePageComponent } from 'shared';
import { PageNotFoundComponent } from 'shared';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: {account: AccountResolverService} },
    { path: 'maintenance', component: MaintenancePageComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            }
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
