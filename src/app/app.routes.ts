import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch:"full"
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'userlist',
        component: UserlistComponent
    },
    {
        path: 'user-profile',
        component: UserprofileComponent
    }, 
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: "/error",
    }
];

