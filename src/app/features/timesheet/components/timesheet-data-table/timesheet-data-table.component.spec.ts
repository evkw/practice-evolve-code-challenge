import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDataTableComponent } from './timesheet-data-table.component';

describe('TimesheetDataTableComponent', () => {
  let component: TimesheetDataTableComponent;
  let fixture: ComponentFixture<TimesheetDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetDataTableComponent ]
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
