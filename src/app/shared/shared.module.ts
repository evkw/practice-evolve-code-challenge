import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditCellComponent } from './text-edit-cell/text-edit-cell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [TextEditCellComponent],
  exports: [TextEditCellComponent]
})
export class SharedModule { }