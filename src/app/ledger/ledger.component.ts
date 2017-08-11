import { Component, OnInit } from '@angular/core';

import { LogService } from '../core/log.service';
import { ContactService } from './shared/contact.service';
import { ContactDataSource } from './shared/contact.datasource';

@Component({
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {

    displayedColumns: string[] = [];

    contactDataSource: ContactDataSource | null;

    constructor(private contactService: ContactService,
        private logger: LogService) { }

    ngOnInit() { 
        this.displayedColumns = ['firstName', 'lastName'];
        this.logger.info('LedgerComponent - ngOnInit');
        this.connect();
    }

    connect() {
        this.contactDataSource = new ContactDataSource(this.contactService, this.logger);  
        this.contactService.initialize();    
    }

}