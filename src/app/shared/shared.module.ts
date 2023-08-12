import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ConfirmDialogModule,ToastModule
  ],
  exports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ConfirmDialogModule ,ToastModule
  ]
})
export class SharedModule { }
