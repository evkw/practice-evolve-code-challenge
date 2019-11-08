import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditCellComponent } from './text-edit-cell/text-edit-cell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [TextEditCellComponent],
  exports: [TextEditCellComponent],
  providers: [TimeHelperService]
})
export class SharedModule {}
