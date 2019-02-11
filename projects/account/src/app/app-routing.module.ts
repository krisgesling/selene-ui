import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { DeviceComponent } from './device/device.component';
import { PageNotFoundComponent } from 'page-not-found';
import { ProfileComponent } from './profile/profile.component';
// import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'device', component: DeviceComponent },
    { path: 'profile', component: ProfileComponent },
    // { path: 'skill', component: ProfileComponent },
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
