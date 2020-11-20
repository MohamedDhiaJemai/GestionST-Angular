import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-consulter-joueur-pro',
  templateUrl: './consulter-joueur-pro.component.html',
  styleUrls: ['./consulter-joueur-pro.component.css']
})
export class ConsulterJoueurProComponent implements OnInit {

  joueurPro: JoueurPro;

  constructor(private joueurProService: JoueurProService, private router: ActivatedRoute,
    private routerNav: Router) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.joueurProService.findById().subscribe(
      data => {
        this.joueurPro = data;
      }
    );
  }

}
