import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArretCaisse } from 'app/model/ArretCaisse.model';
import { CaisseService } from 'app/services/caisse/caisse.service';

@Component({
  selector: 'app-historique-caisse',
  templateUrl: './historique-caisse.component.html',
  styleUrls: ['./historique-caisse.component.css']
})
export class HistoriqueCaisseComponent implements OnInit {
  arrets: ArretCaisse[];
  constructor(private router: ActivatedRoute, private caisseService: CaisseService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.caisseService.findArrets(id).subscribe(data => this.arrets = data);
  }

}
