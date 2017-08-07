import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/ledger',
    pathMatch: 'full'
  }
];

export const AppRoutingProviders: any[] = [
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
