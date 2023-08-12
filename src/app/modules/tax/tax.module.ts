import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';
import { AddTaxComponent } from './components/add-tax/add-tax.component';
import { EditTaxComponent } from './components/edit-tax/edit-tax.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaxEffects } from './store/tax.effects';
import { TaxReducer } from './store/tax.reducer';


@NgModule({
  declarations: [
    TaxComponent,
    AddTaxComponent,
    EditTaxComponent
  ],
  imports: [
    CommonModule,
    TaxRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('Tax', TaxReducer),
    EffectsModule.forFeature([TaxEffects])
  ]
})
export class TaxModule { }
