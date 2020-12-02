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

  article: Achats;
  serviceComplementaire: Achats;
  servicePrincipal: Achats;


  transaction: Transaction;

  constructor(private transactionService: TransactionService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.transactionService.findById(id).subscribe(
      (data: Transaction) => {
        this.transaction = data;
        console.log('transaction', data)
        this.achat = data.achats;
        for (cont a of this.achat){
      console.log(a);
    }

    if (this.achat.type === 'article') {

    }
    if (this.achat.type === 'SERVICE_COMPLEMENTAIRE') {

    }
    if (this.achat.type === 'SERVICE_Principal') {

    }
    console.log('achat', this.achat)
  }
    );
}

}
