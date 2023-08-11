import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  exports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ]
})
export class SharedModule { }
