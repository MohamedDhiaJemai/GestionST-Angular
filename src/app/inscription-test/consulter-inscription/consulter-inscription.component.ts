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

  constructor(private inscriptionTestService: InscriptionTestService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo-test/get/' + this.id;
    this.inscriptionTestService.findById(this.id).subscribe(
      (data: InscriptionTest) => {
        this.inscription = data;
        console.log(this.inscription)
      }
    );
  }
}
