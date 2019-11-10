import { Component } from '@angular/core';
import { EditCellBaseComponent } from '../edit-cell-base/edit-cell-base.component';
import { IsEditable } from '@shared/models';

@Component({
  selector: 'app-duraction-edit-cell',
  templateUrl: './duraction-edit-cell.component.html',
  styleUrls: ['./duraction-edit-cell.component.scss']
})
export class DuractionEditCellComponent<
  T extends IsEditable
> extends EditCellBaseComponent<T> {
  constructor() {
    super();
  }

  ngOnInit() {}

  getMinutesErrorMessage() {
    return '0 - 59'
  }

  getHoursErrorMessage() {
    return '> 0'
  }

  minutesIsInvalid() {
    return this.form.get('minutes').invalid === true;

  }

  hoursIsInvalid() {
    return this.form.get('hours').invalid === true;
  }
}
