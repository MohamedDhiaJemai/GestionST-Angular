import { Component, OnInit } from '@angular/core';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';

@Component({
  selector: 'app-consulter-joueur-pro',
  templateUrl: './consulter-joueur-pro.component.html',
  styleUrls: ['./consulter-joueur-pro.component.css']
})
export class ConsulterJoueurProComponent implements OnInit {

  constructor(private joueurProService: JoueurProService) { }

  ngOnInit(): void {
  }

}
