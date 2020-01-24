import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mintext'
})
export class MintextPipe implements PipeTransform {

  transform(value: string, l?: number): string {

    if (l) {
      if (value.length > l) {
        return value.substr(0, l) + "...";
      }
      } else {
        return value.substr(0, 100) + "...";
      }
    return value;
  }

}
