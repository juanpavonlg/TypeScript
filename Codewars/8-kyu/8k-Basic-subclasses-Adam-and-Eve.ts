export class God {
  /**
   * @returns Human[]
   */
  static create() {
    const adam = new Man();
    const eve = new Woman();
    return [adam, eve];
  } // create()
} // God

export class Human {} // Human()

export class Man extends Human {} // Man()

export class Woman extends Human {} // Woman()
