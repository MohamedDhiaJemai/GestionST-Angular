import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [

  { path: '', component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }], canActivate: [AuthGuard] },
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },


  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // { path: '', component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //   }]
  // },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
