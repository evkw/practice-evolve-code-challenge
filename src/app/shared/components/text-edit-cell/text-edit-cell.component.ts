import { Component, Input } from '@angular/core';
import { IsEditable } from '../../models';
import { EditCellBaseComponent } from '../edit-cell-base/edit-cell-base.component';

@Component({
  selector: 'app-text-edit-cell',
  templateUrl: './text-edit-cell.component.html',
  styleUrls: ['./text-edit-cell.component.scss']
})
export class TextEditCellComponent<
  T extends IsEditable
> extends EditCellBaseComponent<T> {
  @Input() isCurrency: boolean;
  constructor() {
    super();
  }

  ngOnInit() {}

  isEditing() {
    return this.data.isEditing;
  }
}
