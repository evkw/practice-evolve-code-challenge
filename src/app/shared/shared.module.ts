import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { TimeHelperService } from './services/time-helper.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  providers: [TimeHelperService]
})
export class SharedModule {}
