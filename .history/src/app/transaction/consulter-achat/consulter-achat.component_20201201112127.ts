import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {



  constructor(private transactionService: transactionService) { }

  ngOnInit(): void {
  }

}
