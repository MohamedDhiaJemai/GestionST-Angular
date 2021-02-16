import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'app/model/Donation.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
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
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private donationService: DonationService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('donations');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.donationService.getAll().subscribe(
      data => {
        this.donations = data;
      }
    );
  }
}
