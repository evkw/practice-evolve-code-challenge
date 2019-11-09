import { Component, OnInit, Input } from '@angular/core';
import { IsEditable } from '@shared/models';
import { EditCellBaseComponent } from '../edit-cell-base/edit-cell-base.component';

@Component({
  selector: 'app-selection-edit-cell',
  templateUrl: './selection-edit-cell.component.html',
  styleUrls: ['./selection-edit-cell.component.scss']
})
export class SelectionEditCellComponent<
  T extends IsEditable
> extends EditCellBaseComponent<T> {
  constructor() {
    super();
  }

  @Input() list: Array<any>;

  ngOnInit() {}
}
