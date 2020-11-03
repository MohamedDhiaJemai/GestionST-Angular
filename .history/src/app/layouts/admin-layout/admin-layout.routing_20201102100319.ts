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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-List',        component: UserComponent },
    { path: 'add-user',        component: AddUserComponent },
    { path: 'role-list',        component: RoleComponent },
    { path: 'add-role',        component: AddRoleComponent },
    { path: 'update-role/:id',        component: UpdateRoleComponent },
    { path: 'categorie-list',        component: CategorieComponent },
    { path: 'produits',        component: ProduitComponent },
    { path: 'services',        component: ServiceSTComponent },
    { path: 'articles',        component: ArticleComponent },
    { path: 'parents',        component: ParentComponent },
    { path: 'jouteur-professionnel',        component: JoueurProComponent },
    { path: 'jouteur-acamedie',        component: JoueurAcademieComponent }

     // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
