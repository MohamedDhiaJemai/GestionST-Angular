import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livraison } from 'app/model/Livraison.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LivraisonService } from 'app/services/livraison/livraison.service';

@Component({
  selector: 'app-info-livraison',
  templateUrl: './info-livraison.component.html',
  styleUrls: ['./info-livraison.component.css']
})
export class InfoLivraisonComponent implements OnInit {

  idLiv: number;
  livraisons: Livraison[];
  selectedLivraison: Livraison;
  edition: boolean;
  consultation: boolean;
  constructor(private livraisonService: LivraisonService, private autorisationService: AutorisationService,
    private router: ActivatedRoute) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('historique-livraisons');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.idLiv = this.router.snapshot.params['id'];
    this.livraisonService.findCommune(this.idLiv).subscribe(data => this.livraisons = data, err => this.livraisons = []);
  }
}
