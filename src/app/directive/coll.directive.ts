import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[change-color]'
})
export class CollDirective {
  @Input() value: string;

  constructor(private el: ElementRef) {
    console.log(el.nativeElement.value);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
