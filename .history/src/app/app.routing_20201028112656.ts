import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [


  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
  { path: 'layout', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule), canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' }


  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // // { path: '', component: AdminLayoutComponent,
  // //   children: [{
  // //     path: '',
  // //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // //   }]
  // // },
  // { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
