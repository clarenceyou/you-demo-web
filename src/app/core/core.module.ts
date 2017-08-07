import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleService } from './console.service';
import { LogService } from './log.service';

export function cons() {
  return console;
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        { provide: ConsoleService, useFactory: (cons) },
        LogService
    ]
})
export class CoreModule {}