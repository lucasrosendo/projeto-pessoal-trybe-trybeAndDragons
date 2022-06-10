import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static mageInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.addMageInstance();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.mageInstances;
  }

  private static addMageInstance() {
    this.mageInstances += 1;
  }
}