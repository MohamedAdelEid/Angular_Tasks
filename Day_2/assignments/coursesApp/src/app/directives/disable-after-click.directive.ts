import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true,
})
export class DisableAfterClickDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLButtonElement>);
  private originalLabel = '';
  private timeoutId?: ReturnType<typeof setTimeout>;
  private processing = false;

  @Input() appDisableAfterClickWhenDisabled = false;

  @HostBinding('disabled')
  get isDisabled(): boolean {
    return this.appDisableAfterClickWhenDisabled || this.processing;
  }

  @HostListener('click')
  onClick(): void {
    if (this.isDisabled) return;

    const btn = this.el.nativeElement;
    this.originalLabel = btn.textContent?.trim() ?? '';
    this.processing = true;
    btn.textContent = 'Processing...';

    this.timeoutId = setTimeout(() => {
      this.timeoutId = undefined;
      this.processing = false;
      btn.textContent = this.originalLabel;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }
  }
}
