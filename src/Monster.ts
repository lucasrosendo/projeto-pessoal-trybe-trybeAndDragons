import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number { return this._lifePoints; }

  public get strength(): number { return this._strength; }

  attack(enemy: SimpleFighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints;

    const lifePoints = this._lifePoints - damage;

    if (lifePoints < 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = lifePoints;
    }

    return this._lifePoints;
  }
}