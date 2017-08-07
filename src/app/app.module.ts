import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MdIconRegistry } from '@angular/material';
import 'hammerjs';

/* Angular Material module */
import {
  FullscreenOverlayContainer,
  OverlayContainer
} from '@angular/material';

import { AppRoutingModule, AppRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { LedgerModule } from './ledger/ledger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    LedgerModule
  ],
  providers: [
    MdIconRegistry,
    AppRoutingProviders,
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
