import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achats } from 'app/model/Achats.model';
import { Transaction } from 'app/model/Transaction.model';
import { TransactionService } from 'app/services/transaction/transaction.service';

@Component({
  selector: 'app-consulter-achat',
  templateUrl: './consulter-achat.component.html',
  styleUrls: ['./consulter-achat.component.css']
})
export class ConsulterAchatComponent implements OnInit {

  achat: Achats;

  constructor(private transactionService: TransactionService, private router:ActivatedRoute) { }

  ngOnInit(){
    const id = this.router.snapshot.params['id'];
    this.transactionService.findById(id).subscribe(
      (data: Transaction) =>{
        this.achat = data.achats;
        console.log(this.achat)
      }
    );
  }

}
