import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-joueur',
  templateUrl: './validation-joueur.component.html',
  styleUrls: ['./validation-joueur.component.css']
})
export class ValidationJoueurComponent implements OnInit {

  joueurAcademies: JoueurAcamedie[];
  selectedJoueurAcademie: JoueurAcamedie;

  @ViewChild('dt') table: Table;

  constructor(private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.joueurAcademieService.getAlljAcademieNonValider().subscribe(
      data => {
        this.joueurAcademies = data;
        console.log(this.joueurAcademies)
      }
    );
  }

}
