import { Component, OnInit } from '@angular/core';

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
  { path: '/validation-joueur', title: 'Validation', icon: 'content_paste', class: '' },
  { path: '/joueur-professionnel', title: 'Joueur Pro', icon: 'sports_soccer', class: '' },
  { path: '/joueur-acamedie', title: 'Joueur Academie', icon: 'sports_soccer', class: '' },
  { path: '/parents', title: 'Parents', icon: 'supervisor_account', class: '' },
  { path: '/categorie-list', title: 'Catégories', icon: 'content_paste', class: '' },
  { path: '/bornes', title: 'Bornes', icon: 'multiple_stop', class: '' },
  { path: '/user-List', title: 'Utilisateurs', icon: 'person', class: '' },
  { path: '/role-list', title: 'Roles', icon: 'multiple_stop', class: '' },
  
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

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
