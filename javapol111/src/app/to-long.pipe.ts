import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLong'
})
export class ToLongPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 15) + '...';
  }

}
