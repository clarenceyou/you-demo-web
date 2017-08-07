import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgerComponent } from './ledger.component';

const ledgerRoutes: Routes = [
  {
    path: 'ledger',
    component: LedgerComponent
  },
];

export const LedgerRoutingModule: ModuleWithProviders = RouterModule.forChild(ledgerRoutes);
