import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';

@Component({
  selector: 'app-consulter-joueur-academie',
  templateUrl: './consulter-joueur-academie.component.html',
  styleUrls: ['./consulter-joueur-academie.component.css']
})
export class ConsulterJoueurAcademieComponent implements OnInit {
  
  joueurAcademie: JoueurAcamedie;

  constructor(private joueurAcademieService: JoueurAcademieService, private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit(): void {
  }

}
