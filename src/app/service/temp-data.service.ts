import { Injectable } from '@angular/core';

@Injectable()
export class TempDataService {

  constructor() { }

  getUserINfo(var1: number, var2: number): number {
    return var1 + var2;
  }
}
