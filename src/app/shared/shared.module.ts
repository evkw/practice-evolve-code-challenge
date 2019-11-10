import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents, BasicDialogComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';
import { AutofocusDirective } from './directives/autofocus.directive';
import { sharedPipes } from './pipes';
import { EditCellBaseComponent } from './components/edit-cell-base/edit-cell-base.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, MatIconModule],
  declarations: [...sharedComponents, ...sharedPipes, AutofocusDirective, EditCellBaseComponent],
  exports: [...sharedComponents, ...sharedPipes, AutofocusDirective, EditCellBaseComponent],
  entryComponents: [BasicDialogComponent],
  providers: [TimeHelperService]
})
export class SharedModule { }
