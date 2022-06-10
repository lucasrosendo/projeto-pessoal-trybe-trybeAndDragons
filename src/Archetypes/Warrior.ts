import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static warriorInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.addWarriorInstance();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.warriorInstances;
  }

  private static addWarriorInstance() {
    this.warriorInstances += 1;
  }
}