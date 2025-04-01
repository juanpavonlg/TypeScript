export class Warrior {
  constructor(private name: string, public health = 100) {} // constructor()

  strike(enemy: Warrior, swings: number) {} // strike()
} // Warrior

Warrior.prototype.strike = function (enemy: Warrior, swings: number) {
  enemy.health = Math.max(0, enemy.health - swings * 10);
};

const ninja = new Warrior("Ninja");
const samurai = new Warrior("Samurai");
samurai.strike(ninja, 3);
console.log(ninja.health);
