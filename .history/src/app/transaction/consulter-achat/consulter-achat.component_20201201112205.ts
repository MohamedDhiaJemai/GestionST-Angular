import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'app/services/transaction/transaction.service';

@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {



  constructor(private transactionService: TransactionService, private router:Router) { }

  ngOnInit(){
    const id = router
    this.transactionService.findById()
  }

}
