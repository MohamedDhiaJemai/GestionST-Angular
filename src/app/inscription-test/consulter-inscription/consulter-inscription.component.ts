import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { InscriptionTestService } from 'app/services/inscription-test/inscription-test.service';

@Component({
  selector: 'app-consulter-inscription',
  templateUrl: './consulter-inscription.component.html',
  styleUrls: ['./consulter-inscription.component.css']
})
export class ConsulterInscriptionComponent implements OnInit {

  inscription: InscriptionTest = new InscriptionTest();
  urlPhoto: string;

  inputValue: string;
  id: number;
  edition: boolean;
  consultation: boolean;

  constructor(private inscriptionTestService: InscriptionTestService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.checkAutorisations();

    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo-test/get/' + this.id;
    this.inscriptionTestService.findById(this.id).subscribe(
      (data: InscriptionTest) => {
        this.inscription = data;
        console.log(this.inscription)
      }
    );
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
        if (element.metier === 'inscriptions-test') {
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
