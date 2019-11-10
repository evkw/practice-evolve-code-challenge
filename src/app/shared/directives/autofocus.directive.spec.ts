import { AutofocusDirective } from './autofocus.directive';
import { ElementRef } from '@angular/core';


describe('AutofocusDirective', () => {
    let elRef: ElementRef = jasmine.createSpyObj(['nativeElement']);
    elRef.nativeElement = { focus: () => { }};

    it('should create an instance', () => {
        const directive = new AutofocusDirective(elRef);
        expect(directive).toBeTruthy();
    });

    describe('ngAfterViewInit', () => {
        it('should focus native element when autofocus is true', () => {
            const directive = new AutofocusDirective(elRef);
            const spy = spyOn(directive.elementRef.nativeElement, 'focus').and.callThrough();
            directive.autofocus = true;
            directive.ngOnInit();
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should not focus native element when autofocus is false', () => {
            const directive = new AutofocusDirective(elRef);
            const spy = spyOn(directive.elementRef.nativeElement, 'focus').and.callThrough();
            directive.ngOnInit();
            expect(spy).toHaveBeenCalledTimes(0);
        });
    });


});
