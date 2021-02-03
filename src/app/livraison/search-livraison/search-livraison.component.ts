import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'app/model/Livraison.model';
import { LivraisonService } from 'app/services/livraison/livraison.service';

@Component({
  selector: 'app-search-livraison',
  templateUrl: './search-livraison.component.html',
  styleUrls: ['./search-livraison.component.css']
})
export class SearchLivraisonComponent implements OnInit {

  livraisons: Livraison[];
  selectedLivraison: Livraison;

  exist: boolean;

  idTransaction: string;
  tout = true;
  edition: boolean;
  consultation: boolean;

  constructor(private livraisonService: LivraisonService, private router: Router) { }

  ngOnInit(): void {
    this.checkAutorisations();

    this.exist = false;
    this.idTransaction = '';
  }

  findLivraisons() {
    this.livraisonService.findByTransaction(this.idTransaction).subscribe(data => {
      this.livraisons = data;
      this.exist = this.livraisons.length > 0;
      this.tout = true;
      this.livraisons.forEach(element => {
        if (element.validation) {
          this.tout = false;
        }
      });
      console.log(this.livraisons)
    },
      err => {
        console.log(err.status);
        this.exist = false;
        this.livraisons = [];
      }
    );
  }

  validerTout() {
    this.livraisonService.validerByTransaction(this.idTransaction).subscribe(
      data => {
        this.livraisonService.findByTransaction(this.idTransaction).subscribe(dataa => {
          this.livraisons = dataa;
          console.log(this.livraisons)
          this.tout = true;
          this.livraisons.forEach(element => {
            if (element.validation) {
              this.tout = false;
            }
          });
        });
      },
      err => {
        if (err.status === 500) {
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      }
    )
  };

  validerById(id: number) {
    this.livraisonService.validerById(id).subscribe(data => {
      this.livraisonService.findByTransaction(this.idTransaction).subscribe(dataa => {
        this.livraisons = dataa;
        console.log(this.livraisons)
        this.tout = true;
        this.livraisons.forEach(element => {
          if (element.validation) {
            this.tout = false;
          }
        });
      });
    },
      err => {
        if (err.status === 500) {
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      });
  }

  clearLivraisons() {
    this.exist = false;
    this.livraisons = [];
    this.idTransaction = '';
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
        if (element.metier === 'livraison') {
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
