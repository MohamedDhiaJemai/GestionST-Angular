import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LoginService } from 'app/services/login/login.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/roles', title: 'Roles', icon: 'rule', class: '' },
  { path: '/utilisateurs', title: 'Utilisateurs', icon: 'supervisor_account', class: '' },
  { path: '/bornes', title: 'Bornes', icon: 'sensor_window', class: '' },
  { path: '/remises', title: 'Remises', icon: 'money_off', class: '' },
  { path: '/articles', title: 'Articles', icon: 'view_in_ar', class: '' },
  { path: '/services', title: 'Services', icon: 'inventory', class: '' },
  { path: '/saisons', title: 'Saisons Sportives', icon: 'sports_score', class: '' },
  { path: '/categories', title: 'Catégories', icon: 'category', class: '' },
  { path: '/joueur-professionnel', title: 'Joueurs Signataires', icon: 'sports_soccer', class: '' },
  { path: '/validation-joueur', title: 'Validation Joueurs', icon: 'task_alt', class: '' },
  { path: '/joueur-acamedie', title: 'Joueurs Academie', icon: 'face', class: '' },
  { path: '/parents', title: 'Parents', icon: 'escalator_warning', class: '' },
  { path: '/transactions', title: 'Transactions', icon: 'multiple_stop', class: '' },
  { path: '/livraison', title: 'Livraison Achats', icon: 'shopping_cart', class: '' },
  { path: '/retour-cash', title: 'Retour Cash', icon: 'paid', class: '' },
  { path: '/historique-retour', title: 'Historique Retours', icon: 'request_quote', class: '' },
  { path: '/donations', title: 'Donations', icon: 'money', class: '' },
  { path: '/sessions-test', title: 'Sessions Test', icon: 'date_range', class: '' },
  { path: '/inscriptions-test', title: 'Inscriptions Test', icon: 'fact_check', class: '' },
  { path: '/joueurs-test', title: 'Joueurs Test', icon: 'groups', class: '' },
  { path: '/appel', title: 'Appel', icon: 'spellcheck', class: '' },
  { path: '/liste-presence', title: 'Vérification Présence', icon: 'fact_check', class: '' },
  { path: '/historique-presence', title: 'Historique Présence', icon: 'fact_check', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  autorisations;
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private autorisationService: AutorisationService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (roless.includes('ADMIN')) {
      this.menuItems.forEach(element => {
        element.class = '';
      });
    } else {
      this.autorisations = this.autorisationService.getAutorisations();
      if (this.autorisations) {
        this.menuItems.forEach(element => {
          element.class = this.checkClass(element);
        });
      } else {
        this.router.navigateByUrl('/login');
      }
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
      if (element.metier === route.path.substr(1) && element.consultation) {
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
