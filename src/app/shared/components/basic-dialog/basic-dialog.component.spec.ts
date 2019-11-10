import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogComponent } from './basic-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('BasicDialogComponent', () => {
  let component: BasicDialogComponent;
  let fixture: ComponentFixture<BasicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
