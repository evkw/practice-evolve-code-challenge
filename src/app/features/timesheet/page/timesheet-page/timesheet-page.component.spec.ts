import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetPageComponent } from './timesheet-page.component';
import { TimesheetModule } from '@features/timesheet/timesheet.module';
import { TestBaseModule } from 'src/app/spec/data-service-test.spec';

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
});