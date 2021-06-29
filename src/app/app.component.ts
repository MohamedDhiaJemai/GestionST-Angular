import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private config: PrimeNGConfig) { }

  ngOnInit() {
    this.config.setTranslation({
      startsWith: 'Commence Avec',
      contains: 'Contient',
      notContains: 'Ne Contient Pas',
      endsWith: 'Se Termine Par',
      equals: 'Egal à',
      notEquals: 'Différent De',
      noFilter: 'Pas De Filtre',
      lt: 'Inférieur à',
      lte: 'Inférieur ou égal à',
      gt: 'Supérieur à',
      gte: 'Supérieur ou égal à',
      is: 'Est',
      isNot: 'N\'est Pas',
      before: 'Avant',
      after: 'Après',
      clear: 'Effacer',
      apply: 'Appliquer',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Oui',
      reject: 'Non',
      choose: 'Choisir',
      upload: 'Upload',
      cancel: 'Annuler',
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      monthNames: ['Janvier', 'Février', 'mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
      today: 'Aujourd\'hui',
      weekHeader: 'Semaine'
    });
  }
}
