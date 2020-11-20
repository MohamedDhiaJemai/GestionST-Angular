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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-List',        component: UserComponent },
    { path: 'update-List/:id',        component: UpdateUserComponent },
    { path: 'add-user',        component: AddUserComponent },
    { path: 'role-list',        component: RoleComponent },
    { path: 'add-role',        component: AddRoleComponent },
    { path: 'update-role/:id',        component: UpdateRoleComponent },
    { path: 'categorie-list',        component: CategorieComponent },
    { path: 'add-categorie',        component: AddCategorieComponent },
    { path: 'update-categorie/:id',        component: UpdateCategorieComponent },
    { path: 'produits',        component: ProduitComponent },
    { path: 'services',        component: ServiceSTComponent },
    { path: 'articles',        component: ArticleComponent },
    { path: 'parents',        component: ParentComponent },
    { path: 'add-parent',        component: AddParentComponent },
    { path: 'update-parent/:id',        component: UpateParentComponent },
    { path: 'jouteur-professionnel',        component: JoueurProComponent },
    { path: 'add-jouteur-professionnel',        component: AddJoueurProComponent },
    { path: 'consulter-jouteur-professionnel/:id',        component: ConsulterJoueurProComponent },
    { path: 'update-jouteur-professionnel/:id',        component: UpdateJoueurProComponent },
    { path: 'jouteur-acamedie',        component: JoueurAcademieComponent }
    { path: 'add-jouteur-academie',        component: AddJoueurProComponent },
    { path: 'consulter-jouteur-academie/:id',        component: ConsulterJoueurProComponent },
    { path: 'update-jouteur-academie/:id',        component: UpdateJoueurProComponent },

     // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
