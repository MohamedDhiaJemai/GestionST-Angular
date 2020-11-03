import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from './shared/guard/auth.guard';
import { UserComponent } from './user/user.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TableModule,
    ButtonModule

    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AccountComponent,
    UserComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
