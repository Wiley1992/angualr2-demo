import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  newData: any;
  transform(value: any, filterStr: string): any {
    this.newData = [];
    for (let cust of value) {
      if ((cust.custName as string).indexOf(filterStr) >= 0) {
        this.newData.push(cust);
      }
    }
    return this.newData;
  }

}

// for (let i of list) {
//     console.log(i);
// }
