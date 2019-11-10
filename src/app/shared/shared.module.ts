import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents, BasicDialogComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';
import { AutofocusDirective } from './directives/autofocus.directive';
import { sharedPipes } from './pipes';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDialogModule, MatButtonModule, MatIconModule],
  declarations: [...sharedComponents, ...sharedPipes, AutofocusDirective],
  exports: [...sharedComponents, ...sharedPipes, AutofocusDirective],
  entryComponents: [BasicDialogComponent],
  providers: [TimeHelperService]
})
export class SharedModule { }
