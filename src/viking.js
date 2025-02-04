// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  random(army) {
    const min = 0;
    const max = army.length - 1;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInteger;
  }

  vikingAttack() {
    let saxonRandom = this.random(this.saxonArmy);
    let vikingRandom = this.random(this.vikingArmy);


    let resume = this.saxonArmy[saxonRandom].receiveDamage(
      this.vikingArmy[vikingRandom].strength
    );

    for (let i = 0; this.saxonArmy.length > i; i++) {
      if (this.saxonArmy[i].health <= 0) {
        let deadIndex = this.saxonArmy.indexOf(this.saxonArmy[i]);
        this.saxonArmy.splice(deadIndex, 1);
      }
    }

    return resume;
  }

  saxonAttack() {
    let saxonRandom = this.random(this.saxonArmy);
    let vikingRandom = this.random(this.vikingArmy);

    let resume = this.vikingArmy[vikingRandom].receiveDamage(
      this.saxonArmy[saxonRandom].strength
    );

    for (let i = 0; this.vikingArmy.length > i; i++) {
      if (this.vikingArmy[i].health <= 0) {
        let deadIndex = this.vikingArmy.indexOf(this.vikingArmy[i]);
        this.vikingArmy.splice(deadIndex, 1);
      }
    }

    return resume;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
