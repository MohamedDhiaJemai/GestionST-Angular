import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autorisation } from 'app/model/Autorisation.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {

  autorisations: Autorisation[];

  constructor(private autorisationService: AutorisationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.autorisationService.findAutorisationsByUser(id).subscribe(data => {
      this.autorisations = data;
      console.log(this.autorisations)
    })
  }

  updateConsultation(autorisation: Autorisation) {
    autorisation.consultation = !autorisation.consultation;
    this.autorisationService.updateAutorisation(autorisation).subscribe(data => {
    }, err => {
      autorisation.consultation = !autorisation.consultation;
    });
  }

  updateEdition(autorisation: Autorisation) {
    autorisation.edition = !autorisation.edition;
    this.autorisationService.updateAutorisation(autorisation).subscribe(data => {
    }, err => {
      autorisation.edition = !autorisation.edition;
    });
  }

}
