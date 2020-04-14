import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServiceService } from '../LoggingService.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServiceService]

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(
    private loggingService: LoggingServiceService,
    private accountServbice: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountServbice.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
