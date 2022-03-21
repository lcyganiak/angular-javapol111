import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xd'
})
export class XdPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const pattern = new RegExp('(^|\\s|[-?]).', 'g')
    return value.toLowerCase().replace(pattern, (s: string) => s.toUpperCase())
  }

}
