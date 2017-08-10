import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';

import { ContactService } from './contact.service';

export class ContactDataSource extends DataSource<any> {

    constructor(private contactService: ContactService) {
        super();
    }

    connect(): Observable<any[]> {
        return this.contactService.getAll();
    }

    disconnect(): void {
        // No-op
    }

}