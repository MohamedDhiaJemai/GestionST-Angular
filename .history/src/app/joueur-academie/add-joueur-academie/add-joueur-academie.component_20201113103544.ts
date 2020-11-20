import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-add-joueur-academie',
  templateUrl: './add-joueur-academie.component.html',
  styleUrls: ['./add-joueur-academie.component.css']
})
export class AddJoueurAcademieComponent implements OnInit {

  joueurAcamedie: JoueurAcamedie = new JoueurAcamedie();
  sexes: SelectItem[];

  itemsParents: SelectItem[];
  selectedParent : string;
  item: string;

  constructor(private joueurAcaService: JoueurAcademieService, private parentService: ParentService,
    private router: Router, private datePipe: DatePipe) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {
    this.parentService.getAllParent().subscribe(
      data => {
        this.itemsParents = data;
        console.log(this.itemsParents);
      }
    );
  }

  onAddJoueurAca() {
    this.joueurAcamedie.dateNaissance = this.datePipe.transform(this.joueurAcamedie.dateNaissance, 'yyyy-MM-dd');
    this.joueurAcaService.addjAcademie(this.joueurAcamedie).subscribe(
      data => this.router.navigate(['jouteur-academie']),
      error => console.log(error)
    );
  }

}
