import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-consulter-joueur-pro',
  templateUrl: './consulter-joueur-pro.component.html',
  styleUrls: ['./consulter-joueur-pro.component.css']
})
export class ConsulterJoueurProComponent implements OnInit {

  joueurPro: JoueurPro;

  urlPhoto: string;

  id: number;
  edition: boolean;
  consultation: boolean;
  constructor(private joueurProService: JoueurProService, private activatedRoute: ActivatedRoute,
    private autorisationService: AutorisationService) { }

  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('joueur-professionnel');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.urlPhoto = environment.apiUrl + 'photo/get/' + this.id;
    this.joueurProService.findById(this.id).subscribe(
      data => {
        this.joueurPro = data;
      }
    );
  }
}
