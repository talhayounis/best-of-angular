import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableForm]'
})
export class FormControlDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  
  @Input('appDisableForm') set disableForm(condition: boolean) {
    const form = this.el.nativeElement as HTMLFormElement;
    const formElements = form.elements;

    if (condition) {
      this.renderer.setAttribute(form, 'disabled', 'true');
      for (let i = 0; i < formElements.length; i++) {
        (formElements[i] as HTMLInputElement).disabled = true;
      }
    } else {
      this.renderer.removeAttribute(form, 'disabled');
      for (let i = 0; i < formElements.length; i++) {
        (formElements[i] as HTMLInputElement).disabled = false;
      }
    }
  }

  
}
