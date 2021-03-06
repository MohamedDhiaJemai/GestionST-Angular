import { Component, OnInit } from '@angular/core';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dataviewj-pro',
  templateUrl: './dataviewj-pro.component.html',
  styleUrls: ['./dataviewj-pro.component.scss']
})
export class DataViewjProComponent implements OnInit {

  joueurPros: JoueurPro[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;
  photoUrl = environment.apiUrl + 'photo/get/';
  constructor(private joueurProService: JoueurProService) { }

  ngOnInit() {

    this.joueurProService.getAlljProfessionnel().subscribe(
      data => {
        this.joueurPros = data;
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
