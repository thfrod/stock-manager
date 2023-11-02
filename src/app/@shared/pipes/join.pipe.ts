import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(input: Array<any>, bind?: string, sep: string = ', '): string {
    if (bind) {
      return input.map((item) => item[bind]).join(sep);
    }
    return input.join(sep);
  }
}
