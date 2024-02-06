import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom2'
})
export class Custom2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
