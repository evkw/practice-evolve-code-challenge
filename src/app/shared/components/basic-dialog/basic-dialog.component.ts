import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '@shared/models/dialog.model';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    get okText() {
      return !!this.data && !!this.data.okText ? this.data.okText : 'Ok'
    }

    get cancelText() {
      return !!this.data && !!this.data.cancelText ? this.data.cancelText : 'Cancel'
    }

    get dialogIcon() {
      return !!this.data && !!this.data.type ? this.data.type : 'info'
    }

    get dialogIconClass() {
      const icon = this.dialogIcon;
      return  `basic-dialog__icon basic-dialog__icon--${icon}`
    }

    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onOkClick(): void {
      this.dialogRef.close(true);
    }
    
}
