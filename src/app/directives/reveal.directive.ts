import {
  Directive,
  ElementRef,
  inject,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  input,
} from '@angular/core';

export type RevealAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'blur-in'
  | 'flip-up';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  /** Animation variant */
  readonly appReveal = input<RevealAnimation | ''>('');

  /** Delay in ms before animation starts (for staggering) */
  readonly revealDelay = input<number>(0);

  ngAfterViewInit(): void {
    const variant = this.appReveal() || 'fade-up';
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    this.renderer.addClass(this.el.nativeElement, `reveal--${variant}`);
    this.renderer.addClass(this.el.nativeElement, 'reveal--hidden');

    const delay = this.revealDelay();
    if (delay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transitionDelay', `${delay}ms`);
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'reveal--hidden');
          this.renderer.addClass(this.el.nativeElement, 'reveal--visible');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
