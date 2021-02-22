import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sexe } from 'app/model/Enums.model';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { data } from 'jquery';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-add-joueur-academie',
  templateUrl: './add-joueur-academie.component.html',
  styleUrls: ['./add-joueur-academie.component.css']
})
export class AddJoueurAcademieComponent implements OnInit {

  joueurAcamedie: JoueurAcamedie;
  sexes: SelectItem[];

  itemsParents: SelectItem[];
  selectedParent: string;
  item: string;
  annees: string;
  date: Date;

  constructor(private joueurAcaService: JoueurAcademieService, private parentService: ParentService,
    private router: Router, private datePipe: DatePipe) {
    this.sexes = Object.keys(Sexe).map(key => ({ label: Sexe[key], value: key }));
  }

  ngOnInit() {
    this.joueurAcamedie = new JoueurAcamedie();
    const now = new Date();
    const year = now.getFullYear();
    this.annees = (year - 45).toString() + ':' + year.toString();
    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
      }
    );
  }

  onAddJoueurAca() {
    this.joueurAcamedie.validation = false;
    this.joueurAcamedie.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurAcaService.addjAcademie(this.joueurAcamedie).subscribe(
      data => this.router.navigate(['validation-joueur'])
    );
  }

}
