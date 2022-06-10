import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc.addOrcInstance();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.orcInstances;
  }

  private static addOrcInstance() {
    this.orcInstances += 1;
  }
}