import { Directive, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private elmRef: ElementRef,
              private cd: ChangeDetectorRef) { }

  /**
   * Set focus after render the Element
   */
  ngAfterViewInit(): void {
    this.elmRef.nativeElement.focus();
    this.cd.detectChanges();
  }

}
