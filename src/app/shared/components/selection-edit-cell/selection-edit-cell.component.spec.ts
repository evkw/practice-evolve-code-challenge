import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionEditCellComponent } from './selection-edit-cell.component';
import { IsEditable } from '@shared/models';
import { SharedModule } from '@shared/shared.module';

interface MockModel extends IsEditable { }

describe('SelectionEditCellComponent', () => {
    let component: SelectionEditCellComponent<MockModel>;
    let fixture: ComponentFixture<SelectionEditCellComponent<MockModel>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]
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
