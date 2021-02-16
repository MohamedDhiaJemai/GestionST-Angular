import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Remise } from 'app/model/remise.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { RemiseService } from 'app/services/remise/remise.service';

@Component({
  selector: 'app-remise',
  templateUrl: './remise.component.html',
  styleUrls: ['./remise.component.css']
})
export class RemiseComponent implements OnInit {
  remises: Remise[];
  selectedRemise: Remise;
  remiseDialog: boolean;
  submitted: boolean;
  edition: boolean;
  consultation: boolean;
  constructor(private remiseService: RemiseService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('remises');
    this.edition = obj.edition;
    this.consultation = obj.consultation;

    this.remiseService.getAllRemise().subscribe(
      data => {
        this.remises = data;
      }
    );
  }
  openNew() {
    this.selectedRemise = new Remise();
    this.selectedRemise.activation = true;
    this.remiseDialog = true;
    this.submitted = false;
  }
  edit(remisee: Remise) {
    this.submitted = false;
    this.selectedRemise = { ...remisee };
    this.remiseDialog = true;
  }
  hideDialog() {
    this.remiseDialog = false;
  }
  save() {
    this.submitted = true;
    if (this.selectedRemise.id == null) {
      this.remiseService.addRemise(this.selectedRemise).subscribe(data => {
        this.remiseService.getAllRemise().subscribe(
          dataa => {
            this.remises = dataa;
          }
        );
        this.remiseDialog = false;
      });
    } else {
      this.remiseService.updateRemise(this.selectedRemise.id, this.selectedRemise).subscribe(data => {
        this.remiseService.getAllRemise().subscribe(
          dataa => {
            this.remises = dataa;
          }
        );
        this.remiseDialog = false;
      });
    }
  }
}
