import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autorisation } from 'app/model/Autorisation.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { RoleService } from 'app/services/role/role.service';

@Component({
  selector: 'app-autorisation-role',
  templateUrl: './autorisation-role.component.html',
  styleUrls: ['./autorisation-role.component.css']
})
export class AutorisationRoleComponent implements OnInit {
  autorisations: Autorisation[];
  role: string;

  constructor(private autorisationService: AutorisationService, private roleService: RoleService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.autorisationService.findAutorisationsByRole(id).subscribe(data => {
      this.autorisations = data;
    })
    this.roleService.findById(id).subscribe(data => this.role = data.designation);
  }

  updateConsultation(autorisation: Autorisation) {
    autorisation.consultation = !autorisation.consultation;
    this.autorisationService.updateAutorisationRole(autorisation).subscribe(data => {
    }, err => {
      autorisation.consultation = !autorisation.consultation;
    });
  }

  updateEdition(autorisation: Autorisation) {
    autorisation.edition = !autorisation.edition;
    this.autorisationService.updateAutorisationRole(autorisation).subscribe(data => {
    }, err => {
      autorisation.edition = !autorisation.edition;
    });
  }

}
