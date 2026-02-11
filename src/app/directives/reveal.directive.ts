import {
  Directive,
  ElementRef,
  inject,
  AfterViewInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
