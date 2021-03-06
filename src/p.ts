import { Iframe } from "./iframe";

export interface Params {
  id: string;
  title?: string;
}
export default class P {
  constructor(private ifr: Iframe) {
    this.ifr.cloneToIframe();
    this.print();
  }

  checkIdIsEmpty(e: string) :void {
    if (!e) console.error("id 不能为空");
  }

  print(): void {
    this.ifr.print();
  }
}
