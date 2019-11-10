import { OnInit, Input } from '@angular/core';
import { IsEditable } from '@shared/models';
import { FormGroup } from '@angular/forms';

export class EditCellBaseComponent<T extends IsEditable> {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() data: T;
  @Input() autofocus: boolean;

  constructor() {}

  isEditing() {
    return this.data.isEditing;
  }

  isInvalid() {
    return this.form.get(this.controlName).invalid === true;
  }

  getErrorMessage() {
    const errors = this.form.get(this.controlName).errors;
    if(!!errors['required']) {
      return 'Required';
    }
    if(!!errors['min']) {
      return `> than ${errors['min'].min}`
    }
    return 'Error'
  }
}
