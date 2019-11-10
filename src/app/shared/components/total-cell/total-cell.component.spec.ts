import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TotalCellComponent } from './total-cell.component';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { TimeHelperService } from '@shared/services/time-helper.service';


describe('TotalCellComponent', () => {
    let component: TotalCellComponent;
    let fixture: ComponentFixture<TotalCellComponent>;

    const mockForm = new FormGroup({
        hours: new FormControl(1),
        minutes: new FormControl(10),
        hourlyRate: new FormControl(100)
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('after view init', () => {
        it('should update rate when form rate updates', fakeAsync(() => {
            component.form = mockForm;
            expect(component.rate).toBe(undefined);
            component.ngAfterViewInit();
            component.form.get('hourlyRate').setValue(100);
            tick();
            fixture.detectChanges();
            expect(component.rate).toEqual(100);
        }));

        it('should update duration to result of mintuesAndHoursToSeconds', fakeAsync(() => {
            const service = TestBed.get(TimeHelperService);
            component.form = mockForm;
            const spy = spyOn(service, 'minutesAndHoursToSeconds').and.returnValue(1000);
            component.ngAfterViewInit();
            component.form.get('hourlyRate').setValue(100);
            tick();
            fixture.detectChanges();
            expect(spy).toHaveBeenCalledWith(1, 10);
            expect(component.duration).toEqual(1000);
        }));
    });
});
