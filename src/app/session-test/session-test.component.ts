import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionTest } from 'app/model/SessionTest.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { SessionTestService } from 'app/services/session-test/session-test.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-session-test',
  templateUrl: './session-test.component.html',
  styleUrls: ['./session-test.component.css']
})
export class SessionTestComponent implements OnInit {
  sessions: SessionTest[];
  selectedSession: SessionTest;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private sessionTestService: SessionTestService, private autorisationService: AutorisationService) { }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('sessions-test');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.sessionTestService.getAll().subscribe(
      data => {
        this.sessions = data;
      }
    );
  }
}
