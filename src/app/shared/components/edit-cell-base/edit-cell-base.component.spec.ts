import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellBaseComponent } from './edit-cell-base.component';

describe('EditCellBaseComponent', () => {
  let component: EditCellBaseComponent;
  let fixture: ComponentFixture<EditCellBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCellBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCellBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
