import { Component, OnInit } from '@angular/core';
import { Remise } from 'app/model/remise.model';
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
  constructor(private remiseService: RemiseService) { }

  ngOnInit(): void {
    this.remiseService.getAllRemise().subscribe(
      data => {
        this.remises = data;
      }
    );
  }

  openNew() {
    this.selectedRemise = new Remise();
    this.selectedRemise.activation = true;
    console.log(this.selectedRemise);
    this.remiseDialog = true;
    this.submitted = false;
  }

  edit(remisee: Remise) {
    this.submitted = false;
    this.selectedRemise = { ...remisee };
    console.log(this.selectedRemise);
    this.remiseDialog = true;
  }

  hideDialog() {
    this.remiseDialog = false;
  }

  save() {
    this.submitted = true;
    console.log(this.selectedRemise);
    if (this.selectedRemise.id == null) {
      this.remiseService.addRemise(this.selectedRemise).subscribe(data => {
        console.log('ok');
        this.remiseService.getAllRemise().subscribe(
          dataa => {
            this.remises = dataa;
          }
        );
        this.remiseDialog = false;
      }, err => {
        console.log(err);
      });
    } else {
      this.remiseService.updateRemise(this.selectedRemise.id, this.selectedRemise).subscribe(data => {
        console.log('ok');
        this.remiseService.getAllRemise().subscribe(
          dataa => {
            this.remises = dataa;
          }
        );
        this.remiseDialog = false;
      }, err => {
        console.log(err);
      });
    }
  }

}
