import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuractionEditCellComponent } from './duraction-edit-cell.component';
import { IsEditable } from '@shared/models';
import { SharedModule } from '@shared/shared.module';
import { FormGroup, AbstractControl, ControlContainer, FormControl, Validators } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

interface MockModel extends IsEditable { }

describe('DuractionEditCellComponent', () => {
    let component: DuractionEditCellComponent<MockModel>;
    let fixture: ComponentFixture<DuractionEditCellComponent<MockModel>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                NoopAnimationsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DuractionEditCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getMinutesErrorMessage', () => {
        it('should be 0 - 59', () => {
            expect(component.getMinutesErrorMessage()).toBe('0 - 59')
        });
    });

    describe('getHoursErrorMessage', () => {
        it('should be > 0', () => {
            expect(component.getHoursErrorMessage()).toBe('> 0')
        });
    });

    describe('minutesIsInvalid', () => {
        it('should return true when minutes control is invalid', () => {
            spyOn(component, 'isEditing').and.callFake(() => true);
            component.form = new FormGroup({ 
                'minutes': new FormControl(-1, Validators.min(0)),
                'hours': new FormControl()
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();            
            expect(component.minutesIsInvalid()).toBeTruthy();
        });
    });

    describe('hoursIsInvalid', () => {
        it('should return true when hours control is invalid', () => {
            spyOn(component, 'isEditing').and.callFake(() => true);
            component.form = new FormGroup({ 
                'minutes': new FormControl(),
                'hours': new FormControl(-1, Validators.min(0))
            });
            component.form.updateValueAndValidity();
            fixture.detectChanges();            
            expect(component.hoursIsInvalid()).toBeTruthy();
        });
    });
});
