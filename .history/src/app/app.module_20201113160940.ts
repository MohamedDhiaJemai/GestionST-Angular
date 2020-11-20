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

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { AddUserComponent } from './user/add-user/add-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { RoleComponent } from './role/role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { ServiceSTComponent } from './service-st/service-st.component';
import { ArticleComponent } from './article/article.component';
import { ParentComponent } from './parent/parent.component';
import { JoueurProComponent } from './joueur-pro/joueur-pro.component';
import { JoueurAcademieComponent } from './joueur-academie/joueur-academie.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';
import { DataviewjAcademieComponent } from './joueur-academie/dataviewj-academie/dataviewj-academie.component';
import { DataViewjProComponent } from './joueur-pro/dataviewj-pro/dataviewj-pro.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { AddJoueurProComponent } from './joueur-pro/add-joueur-pro/add-joueur-pro.component';
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { ConsulterJoueurProComponent } from './joueur-pro/consulter-joueur-pro/consulter-joueur-pro.component';
import { UpdateJoueurProComponent } from './joueur-pro/update-joueur-pro/update-joueur-pro.component';
import { AddParentComponent } from './parent/add-parent/add-parent.component';
import { UpateParentComponent } from './parent/upate-parent/upate-parent.component';
import { AddJoueurAcademieComponent } from './joueur-academie/add-joueur-academie/add-joueur-academie.component';
import { ConsulterJoueurAcademieComponent } from './joueur-academie/consulter-joueur-academie/consulter-joueur-academie.component';
import { UpdateJoueurAcademieComponent } from './joueur-academie/update-joueur-academie/update-joueur-academie.component';
import { ValidationJoueurAcademieComponent } from './validation-joueur-academie/validation-joueur-academie.component';
import { UpdateJoueurAcademieValidationComponent } from './validation-joueur-academie/update-joueur-academie-validation/update-joueur-academie-validation.component';



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
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    DataViewModule,
    PickListModule,
    DropdownModule,
    RatingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    PanelModule,
    DialogModule,
    RippleModule,
    DropdownModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    MultiSelectModule,
    CalendarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    AddUserComponent,
    RoleComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    CategorieComponent,
    ProduitComponent,
    ServiceSTComponent,
    ArticleComponent,
    ParentComponent,
    JoueurProComponent,
    JoueurAcademieComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
    DataViewjProComponent,
    DataviewjAcademieComponent,
    UpdateUserComponent,
    AddJoueurProComponent,
    ConsulterJoueurProComponent,
    UpdateJoueurProComponent,
    AddParentComponent,
    UpateParentComponent,
    AddJoueurAcademieComponent,
    ConsulterJoueurAcademieComponent,
    UpdateJoueurAcademieComponent,
    ValidationJoueurAcademieComponent,
    UpdateJoueurAcademieValidationComponent
  ],
  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
