import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* YOU - Angular Material module */
import { YouMaterialModule } from '../you-material/you-material.module';

/* Angular Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    YouMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
  ]
})
export class SharedModule {}
