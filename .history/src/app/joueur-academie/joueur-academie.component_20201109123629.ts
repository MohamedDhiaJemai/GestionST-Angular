import { Component, OnInit } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-joueur-academie',
  templateUrl: './joueur-academie.component.html',
  styleUrls: ['./joueur-academie.component.scss']
})
export class JoueurAcademieComponent implements OnInit {

  joueurPros: JoueurAcamedie[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {

    this.joueurAcademieService.getAlljAcademie().subscribe(
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
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
