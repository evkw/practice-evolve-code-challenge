import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEditable } from '@shared/models';
import { SharedModule } from '@shared/shared.module';
import { TextEditCellComponent } from './text-edit-cell.component';

interface MockModel extends IsEditable { }

describe('SelectionEditCellComponent', () => {
  let component: TextEditCellComponent<MockModel>;
  let fixture: ComponentFixture<TextEditCellComponent<MockModel>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
