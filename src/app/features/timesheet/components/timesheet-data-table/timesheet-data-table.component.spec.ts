import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDataTableComponent } from './timesheet-data-table.component';
import { TimesheetModule } from '@features/timesheet/timesheet.module';
import { TestBaseModule } from 'src/app/spec/data-service-test.spec';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
