import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private envEnemies: (Fighter | SimpleFighter)[];
  private envEnemiesAlive: (Fighter | SimpleFighter)[];
  private isBattleOver: boolean;

  constructor(player: Fighter, envEnemies: (Fighter | SimpleFighter)[]) {
    super(player);

    this.envEnemies = envEnemies;
    this.envEnemiesAlive = this.envEnemies;
    this.isBattleOver = false;
  }

  fight(): number {
    while (!this.isBattleOver) {
      const enemy = this.envEnemiesAlive[0];

      this.player.attack(enemy);
      enemy.attack(this.player);

      this.player.special(enemy);
      enemy.attack(this.player);

      if (enemy.lifePoints === -1) this.envEnemiesAlive.shift();

      this.isBattleOver = this.player.lifePoints === -1
      || this.envEnemiesAlive.length === 0;
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}