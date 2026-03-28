import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercent: number = 10): number {
    const pct = Number.isFinite(discountPercent) ? discountPercent : 10;
    return Math.round(value * (1 - pct / 100));
  }
}
