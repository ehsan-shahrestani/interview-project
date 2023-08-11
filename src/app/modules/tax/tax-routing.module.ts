import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxComponent } from './tax.component';
import { AddTaxComponent } from './components/add-tax/add-tax.component';
import { EditTaxComponent } from './components/edit-tax/edit-tax.component';

const routes: Routes = [
  { path: '', component: TaxComponent },

  {
    path: 'addtax',
    component: AddTaxComponent,
  },
  {
    path: 'editTax/:id',
    component: EditTaxComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRoutingModule { }
