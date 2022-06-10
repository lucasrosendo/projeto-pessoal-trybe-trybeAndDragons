import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  readonly name: string;

  constructor(name: string) {
    this.name = name;

    this._race = new Elf(name, 5);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return { ...this._energy }; }

  public attack(enemy: SimpleFighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }

  public special(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength * getRandomInt(0, 20));
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;

    if (damage > 0) {
      const lifePoints = this._lifePoints - damage;

      if (lifePoints < 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = lifePoints;
      }
    }

    return this._lifePoints;
  }
}