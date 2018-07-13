import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export  class ShortenPipe implements PipeTransform {
  public transform(value: any, limit: number): any {
    if (value.length > limit) {
    return value.substr(0, 10) + '...';
  } return value;
  }
}
