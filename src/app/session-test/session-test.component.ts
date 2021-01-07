import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionTest } from 'app/model/SessionTest.model';
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

  @ViewChild('dt') table: Table;
  constructor(private sessionTestService: SessionTestService) { }

  ngOnInit(): void {
    this.sessionTestService.getAll().subscribe(
      data => {
        this.sessions = data;
        console.log(this.sessions);
      }
    );
  }
}
