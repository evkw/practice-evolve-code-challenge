import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TimesheetPageComponent } from './timesheet-page.component';
import { TimesheetModule } from '@features/timesheet/timesheet.module';
import { TestBaseModule, mockTimesheet } from 'src/app/spec/data-service-test.spec';
import { of } from 'rxjs';
import { Timesheet } from '@features/timesheet/models';



describe('TimesheetDTimesheetPageComponentataTableComponent', () => {
    let component: TimesheetPageComponent;
    let fixture: ComponentFixture<TimesheetPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestBaseModule,
                TimesheetModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimesheetPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnDestory', () => {
        it('should clean up dialogCloseSub', () => {
            component.dialogCloseSub = of({}).subscribe();
            component.ngOnDestroy();

            expect(component.dialogCloseSub.closed).toBeTruthy();
        });
    });

    describe('onAdd', () => {
        it('should call add on timesheetService', () => {
            let spy = spyOn(component.timesheetService, 'add').and.callThrough();
            component.onAdd(mockTimesheet);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('onUpdate', () => {
        it('should call update on timesheetService', () => {
            let spy = spyOn(component.timesheetService, 'update').and.callThrough();
            component.onUpdate(mockTimesheet);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('onDelete', () => {
        it('should open dialog', () => {
            let spy = spyOn(component.dialog, 'open').and.callThrough();
            component.onDelete(mockTimesheet);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should not call delete if dialog canceled', () => {
            let spy = spyOn(component.timesheetService, 'delete').and.callThrough();
            component.onDelete(mockTimesheet);
            component.dialog.closeAll();

            expect(spy).toHaveBeenCalledTimes(0);
        });

        it('should call delete if dialog confirmed', () => {
            let spy = spyOn(component.timesheetService, 'delete').and.callThrough();
            spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as any);
            component.onDelete(mockTimesheet);
            component.dialog.closeAll();
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit', () => {
        it('should call update on timesheetService for each selectedItem', () => {
            component.selectedEntries = [mockTimesheet, mockTimesheet, mockTimesheet];
            let spy = spyOn(component.timesheetService, 'update').and.callThrough();
            component.submit();
            expect(spy).toHaveBeenCalledTimes(component.selectedEntries.length);
        });
    });

    describe('createDraft', () => {
        it('should set draft property', () => {
            const mock = { test: true };
            component.createDraft(mock);
            expect(component.draft).toBe(mock);
        });
    });

    describe('onSelectedEntriesChanged', () => {
        it('should set selectedEntries', () => {
            const mock = [mockTimesheet, mockTimesheet];
            component.onSelectedEntriesChanged(mock);
            expect(component.selectedEntries).toBe(mock);
        });
    });
});