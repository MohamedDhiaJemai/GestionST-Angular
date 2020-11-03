import { Component, OnInit } from '@angular/core';
import { Categorie } from 'app/model/Categorie.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();
  categorieSubscription: Subscription;
  ancienCategorie: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

}
