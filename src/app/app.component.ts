import { LoggingServiceService } from './LoggingService.service';
import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService],
})
export class AppComponent implements OnInit {
  
  accounts: {name: string, status: string}[] = [];
  // constructor(private loggingService: LoggingServiceService) {}

  constructor(private accountService: AccountService,) {};

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
