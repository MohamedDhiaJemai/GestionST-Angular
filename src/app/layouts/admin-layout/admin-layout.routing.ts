import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserComponent } from 'app/user/user.component';
import { AddUserComponent } from 'app/user/add-user/add-user.component';
import { RoleComponent } from 'app/role/role.component';
import { AddRoleComponent } from 'app/role/add-role/add-role.component';
import { UpdateRoleComponent } from 'app/role/update-role/update-role.component';
import { CategorieComponent } from 'app/categorie/categorie.component';
import { ServiceSTComponent } from 'app/service-st/service-st.component';
import { ArticleComponent } from 'app/article/article.component';
import { ParentComponent } from 'app/parent/parent.component';
import { JoueurProComponent } from 'app/joueur-pro/joueur-pro.component';
import { JoueurAcademieComponent } from 'app/joueur-academie/joueur-academie.component';
import { AddCategorieComponent } from 'app/categorie/add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from 'app/categorie/update-categorie/update-categorie.component';
import { UpdateUserComponent } from 'app/user/update-user/update-user.component';
import { AddJoueurProComponent } from 'app/joueur-pro/add-joueur-pro/add-joueur-pro.component';
import { ConsulterJoueurProComponent } from 'app/joueur-pro/consulter-joueur-pro/consulter-joueur-pro.component';
import { UpdateJoueurProComponent } from 'app/joueur-pro/update-joueur-pro/update-joueur-pro.component';
import { AddParentComponent } from 'app/parent/add-parent/add-parent.component';
import { UpateParentComponent } from 'app/parent/upate-parent/upate-parent.component';
import { UpdateJoueurAcademieComponent } from 'app/joueur-academie/update-joueur-academie/update-joueur-academie.component';
import { ConsulterJoueurAcademieComponent } from 'app/joueur-academie/consulter-joueur-academie/consulter-joueur-academie.component';
import { AddJoueurAcademieComponent } from 'app/joueur-academie/add-joueur-academie/add-joueur-academie.component';
import { UpdateJoueurAcademieValidationComponent } from 'app/validation-joueur/update-joueur-academie-validation/update-joueur-academie-validation.component';
import { ValidationJoueurComponent } from 'app/validation-joueur/validation-joueur.component';
import { AddArticleComponent } from 'app/article/add-article/add-article.component';
import { ConsulterArticleComponent } from 'app/article/consulter-article/consulter-article.component';
import { UpdateArticleComponent } from 'app/article/update-article/update-article.component';
import { ApprovisonnementArticleComponent } from 'app/article/approvisonnement-article/approvisonnement-article.component';
import { AjouterTailleComponent } from 'app/article/ajouter-taille/ajouter-taille.component';
import { AddServiceComponent } from 'app/service-st/add-service/add-service.component';
import { ConsulterServiceComponent } from 'app/service-st/consulter-service/consulter-service.component';
import { UpdateServiceComponent } from 'app/service-st/update-service/update-service.component';
import { BorneComponent } from 'app/borne/borne.component';
import { ConsulterBorneComponent } from 'app/borne/consulter-borne/consulter-borne.component';
import { UpdateBorneComponent } from 'app/borne/update-borne/update-borne.component';
import { TransactionComponent } from 'app/transaction/transaction.component';
import { ConsulterAchatComponent } from 'app/transaction/consulter-achat/consulter-achat.component';
import { RemiseComponent } from 'app/remise/remise.component';
import { SearchLivraisonComponent } from 'app/livraison/search-livraison/search-livraison.component';
import { DonationComponent } from 'app/donation/donation.component';
import { InscriptionTestComponent } from 'app/inscription-test/inscription-test.component';
import { ConsulterInscriptionComponent } from 'app/inscription-test/consulter-inscription/consulter-inscription.component';
import { UpdateInscriptionComponent } from 'app/inscription-test/update-inscription/update-inscription.component';
import { SessionTestComponent } from 'app/session-test/session-test.component';
import { UpdateSessionTestComponent } from 'app/session-test/update-session-test/update-session-test.component';
import { AddSessionTestComponent } from 'app/session-test/add-session-test/add-session-test.component';
import { SearchRetourComponent } from 'app/retour-cash/search-retour/search-retour.component';
import { GratuiteComponent } from 'app/gratuite/gratuite.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { AutorisationComponent } from 'app/autorisation/autorisation.component';
import { AddBorneComponent } from 'app/borne/add-borne/add-borne.component';
import { AppelComponent } from 'app/appel/appel.component';
import { ListePresenceComponent } from 'app/appel/liste-presence/liste-presence.component';
import { HistoriqueCaisseComponent } from 'app/borne/historique-caisse/historique-caisse.component';
import { HistoriqueRetourComponent } from 'app/retour-cash/historique-retour/historique-retour.component';
import { AutorisationRoleComponent } from 'app/autorisation-role/autorisation-role.component';
import { HistoriquePresenceComponent } from 'app/appel/historique-presence/historique-presence.component';
import { SaisonSportiveComponent } from 'app/saison-sportive/saison-sportive.component';
import { AddSaisonComponent } from 'app/saison-sportive/add-saison/add-saison.component';
import { UpdateSaisonComponent } from 'app/saison-sportive/update-saison/update-saison.component';
import { JoueurTestComponent } from 'app/joueur-test/joueur-test.component';
import { ConsulterJoueurTestComponent } from 'app/joueur-test/consulter-joueur-test/consulter-joueur-test.component';
import { UpdateJoueurTestComponent } from 'app/joueur-test/update-joueur-test/update-joueur-test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'utilisateurs', component: UserComponent },
    { path: 'update-user/:id', component: UpdateUserComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'roles', component: RoleComponent },
    { path: 'add-role', component: AddRoleComponent },
    { path: 'update-role/:id', component: UpdateRoleComponent },
    { path: 'categories', component: CategorieComponent },
    { path: 'add-categorie', component: AddCategorieComponent },
    { path: 'update-categorie/:id', component: UpdateCategorieComponent },
    { path: 'saisons', component: SaisonSportiveComponent },
    { path: 'add-saison', component: AddSaisonComponent },
    { path: 'update-saison/:id', component: UpdateSaisonComponent },
    { path: 'services', component: ServiceSTComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'add-service', component: AddServiceComponent },
    { path: 'consulter-service/:id', component: ConsulterServiceComponent },
    { path: 'update-service/:id', component: UpdateServiceComponent },
    { path: 'add-article', component: AddArticleComponent },
    { path: 'consulter-article/:id', component: ConsulterArticleComponent },
    { path: 'update-article/:id', component: UpdateArticleComponent },
    { path: 'approvisionnement-article/:id', component: ApprovisonnementArticleComponent },
    { path: 'ajouter-taille/:id', component: AjouterTailleComponent },
    { path: 'parents', component: ParentComponent },
    { path: 'add-parent', component: AddParentComponent },
    { path: 'update-parent/:id', component: UpateParentComponent },
    { path: 'joueur-professionnel', component: JoueurProComponent },
    { path: 'add-joueur-professionnel', component: AddJoueurProComponent },
    { path: 'consulter-joueur-professionnel/:id', component: ConsulterJoueurProComponent },
    { path: 'update-joueur-professionnel/:id', component: UpdateJoueurProComponent },
    { path: 'joueur-acamedie', component: JoueurAcademieComponent },
    { path: 'add-joueur-academie', component: AddJoueurAcademieComponent },
    { path: 'consulter-joueur-academie/:id', component: ConsulterJoueurAcademieComponent },
    { path: 'update-joueur-academie/:id', component: UpdateJoueurAcademieComponent },
    { path: 'validation-joueur', component: ValidationJoueurComponent },
    { path: 'update-joueur-academie-validation/:id', component: UpdateJoueurAcademieValidationComponent },
    { path: 'bornes', component: BorneComponent },
    { path: 'transactions', component: TransactionComponent },
    { path: 'consulter-achats/:id', component: ConsulterAchatComponent },
    { path: 'consulter-borne/:id', component: ConsulterBorneComponent },
    { path: 'update-borne/:id', component: UpdateBorneComponent },
    { path: 'add-borne', component: AddBorneComponent },
    { path: 'remises', component: RemiseComponent },
    { path: 'livraison', component: SearchLivraisonComponent },
    { path: 'donations', component: DonationComponent },
    { path: 'inscriptions-test', component: InscriptionTestComponent },
    { path: 'consulter-inscription/:id', component: ConsulterInscriptionComponent },
    { path: 'update-inscription/:id', component: UpdateInscriptionComponent },
    { path: 'joueurs-test', component: JoueurTestComponent },
    { path: 'consulter-joueur-test/:id', component: ConsulterJoueurTestComponent },
    { path: 'update-joueur-test/:id', component: UpdateJoueurTestComponent },
    { path: 'sessions-test', component: SessionTestComponent },
    { path: 'update-session/:id', component: UpdateSessionTestComponent },
    { path: 'add-session', component: AddSessionTestComponent },
    { path: 'retour-cash', component: SearchRetourComponent },
    { path: 'historique-retour', component: HistoriqueRetourComponent },
    { path: 'gratuite-joueur/:id', component: GratuiteComponent },
    { path: 'autorisations/:id', component: AutorisationComponent },
    { path: 'autorisations-role/:id', component: AutorisationRoleComponent },
    { path: 'appel', component: AppelComponent },
    { path: 'liste-presence', component: ListePresenceComponent },
    { path: 'historique-presence', component: HistoriquePresenceComponent },
    { path: 'historique-caisse/:id', component: HistoriqueCaisseComponent },
    { path: 'profil/:id', component: UserProfileComponent }
];
