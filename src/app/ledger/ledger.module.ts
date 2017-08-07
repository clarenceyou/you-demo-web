import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LedgerRoutingModule } from './ledger-routing.module';

import { LedgerComponent } from './ledger.component';

@NgModule({
    imports: [
        SharedModule,
        LedgerRoutingModule
    ],
    exports: [
    ],
    declarations: [
        LedgerComponent
    ]
})
export class LedgerModule {}