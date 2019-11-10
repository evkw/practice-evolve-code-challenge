import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellBaseComponent } from './edit-cell-base.component';
import { SharedModule } from '@shared/shared.module';
import { IsEditable } from '@shared/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface EditMockCellBase extends IsEditable { }

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

    describe('isEditing', () => {
        it('should return true isEditing is true on data', () => {
            component.data = { isEditing: true };
            fixture.detectChanges();
            expect(component.isEditing()).toBeTruthy();
        });
    });

    describe('isInvalid', () => {
        it('should return true when hours control is invalid', () => {
            component.controlName = 'hours';
            component.form = new FormGroup({
                'hours': new FormControl(-1, Validators.min(0))
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();
            expect(component.isInvalid()).toBeTruthy();
        });
    });

    describe('getErrorMessage', () => {
        it('should return "Error" when no errors on control', () => {
            component.controlName = 'hours';
            component.form = new FormGroup({
                'hours': new FormControl(null)
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();
            expect(component.getErrorMessage()).toBe('Error');
        });

        it('should return "Error" unexpected error', () => {
            component.controlName = 'hours';
            component.form = new FormGroup({
                'hours': new FormControl(2, Validators.max(1))
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();
            expect(component.getErrorMessage()).toBe('Error');
        });

        it('should return "Required" when required error present', () => {
            component.controlName = 'hours';
            component.form = new FormGroup({
                'hours': new FormControl(null, Validators.required)
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();
            expect(component.getErrorMessage()).toBe('Required');
        });

        const testCases = [0, 1, 2, 3, 4];

        testCases.forEach(testCase => {
            it(`should return "> than ${testCase}" when value less than ${testCase}`, () => {
                component.controlName = 'hours';
                component.form = new FormGroup({
                    'hours': new FormControl(testCase - 1, Validators.min(testCase))
                });
                component.form.updateValueAndValidity();
                fixture.detectChanges();
                expect(component.getErrorMessage()).toBe(`> than ${testCase}`);
            });
        });
    });
});
