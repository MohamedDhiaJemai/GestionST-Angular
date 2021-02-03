import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { Parent } from 'app/model/Parent.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];
  selectedParent: Parent;

  listEnfant: JoueurAcamedie[];
  displayBasic: boolean;
  edition: boolean;
  consultation: boolean;

  @ViewChild('dt') table: Table;
  constructor(private parentService: ParentService, private joueurAcademieService: JoueurAcademieService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }

  showBasicDialog(id: number) {
    console.log(id);
    this.joueurAcademieService.findByParent(id).subscribe(
      (data: any) => {
        this.listEnfant = data;
        console.log(this.listEnfant);
      }
    );
    this.displayBasic = true;
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
        if (element.metier === 'parents') {
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
