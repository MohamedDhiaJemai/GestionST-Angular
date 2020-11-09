import { Component, Injectable, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.css']
})

@Injectable()
export class JoueurProComponent implements OnInit {

  joueurPros: JoueurPro[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private joueurProService: JoueurProService) { }

  ngOnInit() {

    this.joueurProService.getAlljProfessionnel().subscribe(
      data => {
        this.joueurPros = data;
        console.log(this.joueurPros);
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
