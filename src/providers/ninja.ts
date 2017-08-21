import { Injectable } from '@angular/core';

@Injectable()
export class Ninja {

  constructor(public color: string) {
    this.color = color;
    //console.log(this.color +'PONY');
  }
  /*
  ponyname = 6;
  toconst(){
    return this.ponyname;
  }
  */
  public static toconst(){
    return 6;
  }
  public toString(){
    return `${this.color} pony`;
  }
}
