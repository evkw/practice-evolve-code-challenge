import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutofocusDirective implements OnInit {
  @Input()
  autofocus: boolean;

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    if (this.autofocus === true) {
      this.elementRef.nativeElement.focus();
    }
  }

}
