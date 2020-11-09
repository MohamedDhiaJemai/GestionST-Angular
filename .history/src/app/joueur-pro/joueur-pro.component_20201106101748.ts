import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.css']
})
export class JoueurProComponent implements OnInit {

  joueurPro: JoueurPro[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private joueurProService: JoueurProService) { }

  ngOnInit() {

    this.joueurProService.getAlljProfessionnel().subscribe(
      data => {
        this.joueurPro = data;
        console.log(this.joueurPro);
      }

      this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    );
  }

}
