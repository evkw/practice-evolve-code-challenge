import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDataTableComponent } from './timesheet-data-table.component';
import { TimesheetModule } from '@features/timesheet/timesheet.module';
import { TestBaseModule, mockTimesheet, mockTimesheet2 } from 'src/app/spec/data-service-test.spec';
import { DraftRowInit, DraftRowId } from '@features/timesheet/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('TimesheetDataTableComponent', () => {
    let component: TimesheetDataTableComponent;
    let fixture: ComponentFixture<TimesheetDataTableComponent>;

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
        fixture = TestBed.createComponent(TimesheetDataTableComponent);
        component = fixture.componentInstance;
        component.dataSource = [mockTimesheet, mockTimesheet2];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('createDraft', () => {
        it('should call addDraftRow when there is value', () => {
            const spy = spyOn(component, 'addDraftRow').and.callThrough();
            component.createDraft = true;
            expect(spy).toHaveBeenCalledTimes(1);

        });

        it('should NOT call addDraftRow when there is NO value', () => {
            const spy = spyOn(component, 'addDraftRow').and.callThrough();
            component.createDraft = null;
            expect(spy).toHaveBeenCalledTimes(0);
        });
    });

    describe('addDraftRow', () => {
        it('should emit next focus true when draft is present', () => {
            const spy = spyOn(component.focus$, 'next').and.callThrough();
            component.draftRow = DraftRowInit;
            component.addDraftRow();
            expect(spy).toHaveBeenCalledWith(true);
        });

        it('should not call initForm when draft is present', () => {
            const spy = spyOn(component, 'initForm').and.callThrough();
            component.draftRow = DraftRowInit;
            component.addDraftRow();
            expect(spy).toHaveBeenCalledTimes(0);
        });

        it('should set draft row to init constant when draftRow is null', () => {
            component.addDraftRow();
            expect(component.draftRow).toEqual(DraftRowInit);
        });

        it('should add draftRow to top of datasource when draftRow is null', () => {
            component.addDraftRow();
            expect(component.dataSource[0]).toEqual(DraftRowInit);
        });

        it('should call formInit when draftRow is null', () => {
            const spy = spyOn(component, 'initForm').and.callThrough();
            component.addDraftRow();
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('edit', () => {
        it('should call cancel', () => {
            const spy = spyOn(component, 'cancel').and.callThrough();
            component.edit(mockTimesheet);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should call initForm with timesheet', () => {
            const spy = spyOn(component, 'initForm').and.callThrough();
            component.edit(mockTimesheet);
            expect(spy).toHaveBeenCalledWith(mockTimesheet);
        });

        it('should set timesheet isEditing', () => {
            component.edit(mockTimesheet);
            expect(component.dataSource.find(d => d.id === mockTimesheet.id).isEditing).toEqual(true);
        });
    });

    describe('toggleSelected', () => {
        it('should set isSelected to true', () => {
            component.toggleSelected(mockTimesheet);
            expect(component.dataSource.find(d => d.id === mockTimesheet.id).isSelected).toEqual(true);
        });

        it('should set isSelected to false when called twice', () => {
            component.toggleSelected(mockTimesheet);
            component.toggleSelected(mockTimesheet);
            expect(component.dataSource.find(d => d.id === mockTimesheet.id).isSelected).toEqual(false);
        });

        it('should emit selectedEntries', () => {
            const spy = spyOn(component.selectedEntries, 'emit').and.callThrough();
            component.toggleSelected(mockTimesheet);
            expect(spy).toHaveBeenCalledWith(component.dataSource.filter(data => data.isSelected === true));
        });
    });

    describe('cancel', () => {
        it('should remove draft row from datasource if draftRow is not null', () => {
            component.addDraftRow();
            component.cancel();
            expect(component.dataSource).not.toContain(DraftRowInit);
        });

        it('should set draftRow to null if draftRow is not null', () => {
            component.addDraftRow();
            component.cancel();
            expect(component.draftRow).toBeFalsy();
        });

        it('should set isEditing to false on existing row', () => {
            component.edit(mockTimesheet);
            component.cancel();
            expect(component.dataSource.filter(d => d.isEditing === true)).toEqual([]);
        });
    });

    describe('save', () => {
        it('should emit update when form is valid and no draftRow', () => {
            const spy = spyOn(component.update, 'emit').and.callThrough();
            component.edit(mockTimesheet);
            component.draftRow = null;
            component.formData.updateValueAndValidity();
            component.save();
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should emit add when form is valid and draftRow is not null', () => {
            const spy = spyOn(component.add, 'emit').and.callThrough();
            component.addDraftRow();
            component.formData.patchValue({title: 'test', type: 'test'});
            component.formData.updateValueAndValidity();
            component.save();
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should not emit when form is invalid', () => {
            const addSpy = spyOn(component.add, 'emit').and.callThrough();
            const updateSpy = spyOn(component.update, 'emit').and.callThrough();
            component.addDraftRow();
            component.formData.updateValueAndValidity();
            component.save();
            expect(addSpy).toHaveBeenCalledTimes(0);
            expect(updateSpy).toHaveBeenCalledTimes(0);
        });
    });

    describe('deleteTimesheet', () => {
        it('should emit delete', () => {
            const spy = spyOn(component.delete, 'emit').and.callThrough();
            component.deleteTimesheet(mockTimesheet);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('formDataToTimesheet', () => {
        it('should return formdata as timesheet', () => {
            component.initForm(mockTimesheet);
            const result = component.formDataToTimesheet();
            expect(result).toEqual(mockTimesheet);
        });

        it('should return timesheet id if not draft row', () => {
            component.initForm(mockTimesheet);
            const result = component.formDataToTimesheet();
            expect(result.id).toEqual(mockTimesheet.id);
        });

        it('should return create timesheet id if draftRow not empty', () => {
            component.addDraftRow();
            const result = component.formDataToTimesheet();
            expect(result.id).not.toEqual(DraftRowId);
        });
    });
});
