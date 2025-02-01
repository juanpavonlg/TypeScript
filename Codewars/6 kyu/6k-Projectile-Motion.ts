export class Projectile {
  #h0: number;
  #v0: number;
  #a: number;
  #vv: number;
  #hv: number;

  constructor(h0: number, v0: number, a: number) {
    this.#h0 = h0;
    this.#v0 = v0;
    this.#a = a * Math.PI / 180;
    this.#vv = this.#v0 * Math.sin(this.#a);
    this.#hv = this.#v0 * Math.cos(this.#a);
  } // constructor()

  heightEq() {
    return `h(t) = -16.0t^2${this.#vv ? ` + ${this.fmtNum(this.#vv)}t` : ""}${this.#h0 ? ` + ${this.#h0.toFixed(1)}` : ""}`;
  } // heightEq()

  horizEq() {
    return `x(t) = ${this.#hv ? `${this.fmtNum(this.#hv)}t`: "0.0"}`;
  } // horizEq()

  height(t: number) {
    return this.fmtNum(-16 * t * t + this.#vv * t + this.#h0);
  } // height()

  horiz(t: number) {
    return this.fmtNum(this.#hv * t);
  } // horiz()

  landing() {
    const t = (this.#vv + Math.sqrt(this.#vv ** 2 + 64 * this.#h0)) / 32;
    return [this.fmtNum(this.horiz(t)), 0, this.fmtNum(t)];
  } // landing()

  fmtNum(n: number) {
    return +n.toFixed(3);
  } // fmtNum()
} // Projectile

var p = new Projectile(5, 2, 45);
console.log(p.heightEq());
console.log(p.horizEq());
console.log(p.height(0.2));
console.log(p.horiz(0.2));
console.log(p.landing());
