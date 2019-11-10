import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellBaseComponent } from './edit-cell-base.component';
import { SharedModule } from '@shared/shared.module';
import { IsEditable } from '@shared/models';

export interface EditMockCellBase extends IsEditable {}

describe('EditCellBaseComponent', () => {
  let component: EditCellBaseComponent<EditMockCellBase>;
  let fixture: ComponentFixture<EditCellBaseComponent<EditMockCellBase>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
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
