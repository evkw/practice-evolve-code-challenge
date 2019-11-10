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
}
