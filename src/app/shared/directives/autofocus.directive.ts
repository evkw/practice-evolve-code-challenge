import { Directive, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutofocusDirective implements OnInit, AfterViewInit {
  @Input()
  autofocus: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.autofocus === true) {
      setTimeout(() => {
        this.elementRef.nativeElement.focus();
      });
    }
  }
}
