import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LoginService } from 'app/services/login/login.service';
import { log } from 'console';
import { data } from 'jquery';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/articles', title: 'Articles', icon: 'add_shopping_cart', class: '' },
  { path: '/services', title: 'Services', icon: 'shop_two', class: '' },
  { path: '/transactions', title: 'Transaction', icon: 'shop_two', class: '' },
  { path: '/validation-joueur', title: 'Validation', icon: 'content_paste', class: '' },
  { path: '/joueur-professionnel', title: 'Joueur Pro', icon: 'sports_soccer', class: '' },
  { path: '/joueur-acamedie', title: 'Joueur Academie', icon: 'sports_soccer', class: '' },
  { path: '/parents', title: 'Parents', icon: 'supervisor_account', class: '' },
  { path: '/categories', title: 'Catégories', icon: 'content_paste', class: '' },
  { path: '/bornes', title: 'Bornes', icon: 'multiple_stop', class: '' },
  { path: '/utilisateurs', title: 'Utilisateurs', icon: 'person', class: '' },
  { path: '/roles', title: 'Roles', icon: 'multiple_stop', class: '' },
  { path: '/remises', title: 'Remises', icon: 'multiple_stop', class: '' },
  { path: '/livraison', title: 'livraison Achats', icon: 'multiple_stop', class: '' },
  { path: '/donations', title: 'Donations', icon: 'multiple_stop', class: '' },
  { path: '/inscriptions-test', title: 'Inscriptions Test', icon: 'multiple_stop', class: '' },
  { path: '/sessions-test', title: 'Sessions Test', icon: 'multiple_stop', class: '' },
  { path: '/retour-cash', title: 'Retour Cash', icon: 'multiple_stop', class: '' },
  { path: '/historique-retour', title: 'Historique Retours', icon: 'multiple_stop', class: '' },
  { path: '/appel', title: 'Appel', icon: 'multiple_stop', class: '' },
  { path: '/liste-presence', title: 'Présence', icon: 'multiple_stop', class: '' }


  // { path: '/produits', title: 'Produits', icon: 'add_shopping_cart', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' }
  // { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  // { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  // { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  // { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  autorisations;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private autorisationService: AutorisationService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (roless.includes('ADMIN')) {
      this.menuItems.forEach(element => {
        element.class = '';
      });
    } else {
      this.autorisationService.findAutorisations().subscribe(dataa => {
        this.autorisations = dataa;
        this.menuItems.forEach(element => {
          element.class = this.checkClass(element);
        });
      });
    }
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  checkClass(route: RouteInfo): string {
    let ret = false;
    this.autorisations.forEach(element => {
      if (element.tache.metier === route.path.substr(1) && element.consultation) {
        ret = true;
      }
    });
    return ret ? '' : 'd-none';
  }

  onLoggedout() {
    this.loginService.logout();
  }

  onProfilClick() {
    this.router.navigateByUrl('/profil/' + this.jwtHelper.decodeToken(localStorage.getItem('token')).sub);
  }
}
