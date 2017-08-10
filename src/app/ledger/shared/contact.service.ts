import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import '../../shared/rxjs-operators';

class Contact {
    first_name: string;
    last_name: String;
}

@Injectable()
export class ContactService {

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

    getAll(): Observable<Contact[]> {
        return Observable.of(this.contacts);
    }

}

