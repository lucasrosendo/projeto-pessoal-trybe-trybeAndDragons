import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private enemyPlayer: Fighter;
  private isBattleOver: boolean;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this.enemyPlayer = player2;
    this.isBattleOver = false;
  }

  fight(): number {
    while (!this.isBattleOver) {
      this.player.attack(this.enemyPlayer);
      this.enemyPlayer.attack(this.player);

      this.player.special(this.enemyPlayer);
      this.enemyPlayer.special(this.player);

      this.isBattleOver = this.player.lifePoints === -1
      || this.enemyPlayer.lifePoints === -1;
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}