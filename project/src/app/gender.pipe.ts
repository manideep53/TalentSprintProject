import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(name: any, gender: any): unknown {
    if (gender == 'Female') {
      return 'Ms.' + name;
    } else return 'Mr.' + name;
  }
}
