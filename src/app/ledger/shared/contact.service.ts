import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import '../../shared/rxjs-operators';

import { LogService } from '../../core/log.service';

export class Contact {
    first_name: string;
    last_name: String;
}

@Injectable()
export class ContactService {

    dataChange: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);    

    contacts: Contact[] = [
        {
            first_name: 'Clarence',
            last_name: 'Ho'
        },
        {
            first_name: 'Andy',
            last_name: 'Lau'
        }        
    ];

    get data(): Contact[] { return this.dataChange.value; }

    constructor(private logger: LogService) {}

    initialize() {
        this.logger.info('In ContactService - initialize()');
        this.dataChange.next(this.contacts);
    }

    getAll(): Observable<Contact[]> {
        this.logger.info('In ContactService - getAll()');
        return Observable.of(this.contacts);
    }

}

