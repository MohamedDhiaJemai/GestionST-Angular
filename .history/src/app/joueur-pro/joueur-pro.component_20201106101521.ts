import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur-pro',
  templateUrl: './joueur-pro.component.html',
  styleUrls: ['./joueur-pro.component.css']
})
export class JoueurProComponent implements OnInit {
  
  products: Produit[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor() { }

  ngOnInit(): void {
  }

}
