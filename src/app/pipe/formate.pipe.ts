import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formate'
})
export class FormatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return "姓名：" + value;
  }

}
