import { Component, OnInit, ViewChild } from '@angular/core';
import { Donation } from 'app/model/Donation.model';
import { DonationService } from 'app/services/donation/donation.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donations: Donation[];
  selectedDonation: Donation;

  @ViewChild('dt') table: Table;
  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.donationService.getAll().subscribe(
      data => {
        this.donations = data;
      }
    );
  }

}
