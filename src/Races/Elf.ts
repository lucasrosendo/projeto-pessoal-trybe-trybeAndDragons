import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.addElfInstance();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.elfInstances;
  }

  private static addElfInstance() {
    this.elfInstances += 1;
  }
}