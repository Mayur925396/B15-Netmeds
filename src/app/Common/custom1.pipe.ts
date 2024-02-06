import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom1'
})
export class Custom1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
