import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static necromancerInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.addNecromancerInstance();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.necromancerInstances;
  }

  private static addNecromancerInstance() {
    this.necromancerInstances += 1;
  }
}