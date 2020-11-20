import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';

@Component({
  selector: 'app-consulter-joueur-academie',
  templateUrl: './consulter-joueur-academie.component.html',
  styleUrls: ['./consulter-joueur-academie.component.css']
})
export class ConsulterJoueurAcademieComponent implements OnInit {

  joueurAcademie: JoueurAcamedie;

  constructor(private joueurAcademieService: JoueurAcademieService, private router: ActivatedRoute,
    private routerNav: Router, private parentService: ParentService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.joueurAcademieService.findById(id).subscribe(
      data => {
        this.joueurAcademie = data;
        console.log(this.joueurAcademie)
      }
    );
  }

}
