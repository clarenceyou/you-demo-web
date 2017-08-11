import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';

import '../../shared/rxjs-operators';
import { LogService } from '../../core/log.service';
import { ContactService, Contact } from './contact.service';

export class ContactDataSource extends DataSource<any> {

    constructor(private contactService: ContactService,
        private logger: LogService) {
        super();
        logger.info('ContactDataSource - constructor');
    }

    connect(): Observable<any[]> {
        this.logger.info('----------In ContactDataSource connect()');

        const displayDataChanges = [
            this.contactService.dataChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.getSortedData();
      
            return data;
        });
    }

    disconnect(): void {
        // No-op
    }

  /** Returns a sorted copy of the database data. */
  getSortedData(): Contact[] {
      return this.contactService.data;
  }

}