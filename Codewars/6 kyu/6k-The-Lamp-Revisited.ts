class Lamp {
  public color: string;
  public on: boolean;

  constructor(color: string) {
    this.color = color;
    this.on = false;
  } // constructor()

  public toggleSwitch(): void {
    this.on = !this.on;
  } // toggleSwitch()

  public state(): string {
    return `The lamp is ${this.on ? "on" : "off"}.`;
  } // state()
} // Lamp

export { Lamp };

const lamp = new Lamp("Blue");
console.log(lamp.state());
lamp.toggleSwitch();
console.log(lamp.state());
