import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IsEditable } from '../models';

@Component({
  selector: 'app-text-edit-cell',
  templateUrl: './text-edit-cell.component.html',
  styleUrls: ['./text-edit-cell.component.css']
})
export class TextEditCellComponent<T extends IsEditable> implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() data: T;

  constructor() { }

  ngOnInit() {
  }

  isEditing() {
    return this.data.isEditing;
  }

}