import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserComponent } from 'app/user/user.component';
import { AddUserComponent } from 'app/user/add-user/add-user.component';
import { RoleComponent } from 'app/role/role.component';
import { AddRoleComponent } from 'app/role/add-role/add-role.component';
import { UpdateRoleComponent } from 'app/role/update-role/update-role.component';
import { CategorieComponent } from 'app/categorie/categorie.component';
import { ProduitComponent } from '../../produit/produit.component';
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
import { UpdateApprovisionnementComponent } from 'app/article/update-approvisionnement/update-approvisionnement.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-List', component: UserComponent },
    { path: 'update-List/:id', component: UpdateUserComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'role-list', component: RoleComponent },
    { path: 'add-role', component: AddRoleComponent },
    { path: 'update-role/:id', component: UpdateRoleComponent },
    { path: 'categorie-list', component: CategorieComponent },
    { path: 'add-categorie', component: AddCategorieComponent },
    { path: 'update-categorie/:id', component: UpdateCategorieComponent },
    // { path: 'produits', component: ProduitComponent },
    { path: 'services', component: ServiceSTComponent },
    { path: 'articles', component: ArticleComponent },
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
    { path: 'Update-Joueur-Academie-Validation/:id', component: UpdateJoueurAcademieValidationComponent },

    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
