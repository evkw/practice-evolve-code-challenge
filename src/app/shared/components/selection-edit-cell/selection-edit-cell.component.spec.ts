import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionEditCellComponent } from './selection-edit-cell.component';

describe('SelectionEditCellComponent', () => {
  let component: SelectionEditCellComponent;
  let fixture: ComponentFixture<SelectionEditCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionEditCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionEditCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
