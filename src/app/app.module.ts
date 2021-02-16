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
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { DataviewjAcademieComponent } from './joueur-academie/dataviewj-academie/dataviewj-academie.component';
import { DataViewjProComponent } from './joueur-pro/dataviewj-pro/dataviewj-pro.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AddJoueurProComponent } from './joueur-pro/add-joueur-pro/add-joueur-pro.component';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { ConsulterJoueurProComponent } from './joueur-pro/consulter-joueur-pro/consulter-joueur-pro.component';
import { UpdateJoueurProComponent } from './joueur-pro/update-joueur-pro/update-joueur-pro.component';
import { AddParentComponent } from './parent/add-parent/add-parent.component';
import { UpateParentComponent } from './parent/upate-parent/upate-parent.component';
import { AddJoueurAcademieComponent } from './joueur-academie/add-joueur-academie/add-joueur-academie.component';
import { ConsulterJoueurAcademieComponent } from './joueur-academie/consulter-joueur-academie/consulter-joueur-academie.component';
import { UpdateJoueurAcademieComponent } from './joueur-academie/update-joueur-academie/update-joueur-academie.component';
import { UpdateJoueurAcademieValidationComponent } from './validation-joueur/update-joueur-academie-validation/update-joueur-academie-validation.component';
import { ValidationJoueurComponent } from './validation-joueur/validation-joueur.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { GalleriaModule } from 'primeng/galleria';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { DataviewArticleComponent } from './article/dataview-article/dataview-article.component';
import { ConsulterArticleComponent } from './article/consulter-article/consulter-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ApprovisonnementArticleComponent } from './article/approvisonnement-article/approvisonnement-article.component';
import { TabViewModule } from 'primeng/tabview';
import { AjouterTailleComponent } from './article/ajouter-taille/ajouter-taille.component';
import { DataviewServiceComponent } from './service-st/dataview-service/dataview-service.component';
import { AddServiceComponent } from './service-st/add-service/add-service.component';
import { UpdateServiceComponent } from './service-st/update-service/update-service.component';
import { ConsulterServiceComponent } from './service-st/consulter-service/consulter-service.component';
import { BorneComponent } from './borne/borne.component';
import { AddBorneComponent } from './borne/add-borne/add-borne.component';
import { ConsulterBorneComponent } from './borne/consulter-borne/consulter-borne.component';
import { UpdateBorneComponent } from './borne/update-borne/update-borne.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ConsulterAchatComponent } from './transaction/consulter-achat/consulter-achat.component';
import { RemiseComponent } from './remise/remise.component';
import { LivraisonsEnAttenteComponent } from './livraison/livraisons-en-attente/livraisons-en-attente.component';
import { SearchLivraisonComponent } from './livraison/search-livraison/search-livraison.component';
import { DonationComponent } from './donation/donation.component';
import { InscriptionTestComponent } from './inscription-test/inscription-test.component';
import { ConsulterInscriptionComponent } from './inscription-test/consulter-inscription/consulter-inscription.component';
import { UpdateInscriptionComponent } from './inscription-test/update-inscription/update-inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SessionTestComponent } from './session-test/session-test.component';
import { UpdateSessionTestComponent } from './session-test/update-session-test/update-session-test.component';
import { AddSessionTestComponent } from './session-test/add-session-test/add-session-test.component';
import { SearchRetourComponent } from './retour-cash/search-retour/search-retour.component';
import { GratuiteComponent } from './gratuite/gratuite.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { CaisseComponent } from './caisse/caisse.component';
import { AppelComponent } from './appel/appel.component';
import { ListePresenceComponent } from './appel/liste-presence/liste-presence.component';
import { HistoriqueCaisseComponent } from './borne/historique-caisse/historique-caisse.component';

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
    CalendarModule,
    GalleriaModule,
    InputNumberModule,
    InputSwitchModule,
    TabViewModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
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
    UpdateJoueurAcademieValidationComponent,
    ValidationJoueurComponent,
    ListDocumentComponent,
    AddArticleComponent,
    DataviewArticleComponent,
    ConsulterArticleComponent,
    UpdateArticleComponent,
    ApprovisonnementArticleComponent,
    AjouterTailleComponent,
    DataviewServiceComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    ConsulterServiceComponent,
    BorneComponent,
    AddBorneComponent,
    ConsulterBorneComponent,
    UpdateBorneComponent,
    TransactionComponent,
    ConsulterAchatComponent,
    RemiseComponent,
    LivraisonsEnAttenteComponent,
    SearchLivraisonComponent,
    DonationComponent,
    InscriptionTestComponent,
    ConsulterInscriptionComponent,
    UpdateInscriptionComponent,
    PageNotFoundComponent,
    SessionTestComponent,
    UpdateSessionTestComponent,
    AddSessionTestComponent,
    SearchRetourComponent,
    GratuiteComponent,
    AcceuilComponent,
    AutorisationComponent,
    CaisseComponent,
    ListePresenceComponent,
    AppelComponent,
    HistoriqueCaisseComponent,
  ],
  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
