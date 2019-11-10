import { Component, AfterViewInit, Input } from '@angular/core';
import { TimeHelperService } from '@shared/services/time-helper.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-total-cell',
  templateUrl: './total-cell.component.html',
  styleUrls: ['./total-cell.component.scss']
})
export class TotalCellComponent implements AfterViewInit {

  @Input() duration: number;
  @Input() rate: number;
  @Input() form: FormGroup;

  constructor(private _timeHelperSvc: TimeHelperService) { }

  ngAfterViewInit(): void {

    if (!!this.form) {
      this.form.valueChanges.subscribe(value => {
        const { hours, minutes, hourlyRate } = value;
        this.rate = hourlyRate;
        this.duration = this._timeHelperSvc.minutesAndHoursToSeconds(hours, minutes);
      });
    }
  }
}
