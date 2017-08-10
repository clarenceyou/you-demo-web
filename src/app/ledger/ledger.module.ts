import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LedgerRoutingModule } from './ledger-routing.module';

import { LedgerComponent } from './ledger.component';
import { ContactService } from './shared/contact.service';

@NgModule({
    imports: [
        SharedModule,
        LedgerRoutingModule
    ],
    exports: [
    ],
    providers: [
        ContactService
    ],
    declarations: [
        LedgerComponent
    ]
})
export class LedgerModule {}