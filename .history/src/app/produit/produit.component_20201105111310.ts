import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  products: Produit[];
  sortOptions: SelectItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
