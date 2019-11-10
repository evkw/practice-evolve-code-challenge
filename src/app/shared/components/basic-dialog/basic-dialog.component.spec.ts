import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogComponent } from './basic-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

describe('BasicDialogComponent', () => {
  let component: BasicDialogComponent;
  let fixture: ComponentFixture<BasicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      providers: [
        {provide: MatDialogRef, useValue: {close: () => {}}},
        {provide: MAT_DIALOG_DATA, useValue: {okText: 'test', cancelText: 'test'}},
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

  describe('onNoClick', () => {
    it('should close with false', () => {
      let spy = spyOn(component.dialogRef, 'close');
      component.onNoClick();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(false);
    });
  });

  describe('onOkClick', () => {
    it('should close with true', () => {
      let spy = spyOn(component.dialogRef, 'close');
      component.onOkClick();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(true);
    });
  });

  describe('okText', () => {
    it('should return "OK" when okText not set in data', () => {
      component.data = null;
      fixture.detectChanges();
      expect(component.okText).toBe('Ok')
    });

    it('should return "test" when okText is set to "test" in data', () => {
      expect(component.okText).toBe('test')
    });
  });

  describe('cancelText', () => {
    it('should return "Cancel" when cancelText not set in data', () => {
      component.data = null;
      fixture.detectChanges();
      expect(component.cancelText).toBe('Cancel')
    });

    it('should return "test" when cancelText is set to "test" in data', () => {
      expect(component.cancelText).toBe('test')
    });
  });
});
