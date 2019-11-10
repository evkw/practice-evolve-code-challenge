import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
  declarations: [...sharedComponents, AutofocusDirective],
  exports: [...sharedComponents, AutofocusDirective],
  providers: [TimeHelperService]
})
export class SharedModule {}
