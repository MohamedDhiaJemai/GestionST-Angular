import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetourCash } from 'app/model/RetourCash.model';
import { RetourCashService } from 'app/services/retour-cash/retour-cash.service';

@Component({
  selector: 'app-search-retour',
  templateUrl: './search-retour.component.html',
  styleUrls: ['./search-retour.component.css']
})
export class SearchRetourComponent implements OnInit {

  retourCash: RetourCash;
  exist: boolean;
  idRetour: string;
  edition: boolean;
  consultation: boolean;

  constructor(private retourCashService: RetourCashService, private router: Router) { }

  ngOnInit(): void {
    this.checkAutorisations();

    document.getElementById('searchField').focus();
    this.exist = false;
    this.idRetour = '';
  }

  findRetour() {
    this.retourCashService.findById(this.idRetour).subscribe(data => {
      this.retourCash = data;
      this.exist = this.retourCash != null;
      console.log(this.retourCash)
    },
      err => {
        console.log(err.status);
        this.exist = false;
      }
    );
  }

  validerRetour(id: string) {
    this.retourCashService.retour(id).subscribe((data: RetourCash) =>
      this.retourCash = data
      ,
      err => {
        if (err.status === 500) {
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      });
  }

  clear() {
    document.getElementById('searchField').focus();
    this.exist = false;
    this.retourCash = null;
    this.idRetour = '';
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'retour-cash') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
