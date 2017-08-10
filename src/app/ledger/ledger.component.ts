import { Component, OnInit } from '@angular/core';

import { ContactService } from './shared/contact.service';
import { ContactDataSource } from './shared/contact.datasource';

@Component({
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {

    displayedColumns: string[] = [];

    contactDataSource: ContactDataSource | null;

    constructor(private contactService: ContactService) { }

    ngOnInit() { 
        this.displayedColumns = ['firstName', 'lastName'];
        this.contactDataSource = new ContactDataSource(this.contactService);
    }

}