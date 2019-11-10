import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';
import { AutofocusDirective } from './directives/autofocus.directive';
import { sharedPipes } from './pipes';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatTableModule],
  declarations: [...sharedComponents, ...sharedPipes, AutofocusDirective],
  exports: [...sharedComponents, ...sharedPipes, AutofocusDirective],
  providers: [TimeHelperService]
})
export class SharedModule { }
