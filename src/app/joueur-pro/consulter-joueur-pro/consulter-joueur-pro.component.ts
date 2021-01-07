import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-consulter-joueur-pro',
  templateUrl: './consulter-joueur-pro.component.html',
  styleUrls: ['./consulter-joueur-pro.component.css']
})
export class ConsulterJoueurProComponent implements OnInit {

  joueurPro: JoueurPro;

  urlPhoto: string;

  id: number;

  constructor(private joueurProService: JoueurProService, private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.urlPhoto = 'http://127.0.0.1:8443/photo/get/' + this.id;
    this.joueurProService.findById(this.id).subscribe(
      data => {
        this.joueurPro = data;
        console.log(this.joueurPro)
      }
    );
  }

}
