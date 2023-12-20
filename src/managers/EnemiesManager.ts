import * as Phaser from "phaser";
import { AnimationTypes } from "../animations";
import Enemy from "../objects/Enemy";
import { AssetTypes } from "../assets";

const ORIGIN_X = 100;
const ORIGIN_Y = 100;
const ENEMY_ROWS = [
  {
    y: 0,
    type: AssetTypes.EnemyLips,
    animation: AnimationTypes.EnemyLips,
  },
  {
    y: 1,
    type: AssetTypes.EnemyBonbon,
    animation: AnimationTypes.EnemyBonbon,
  },
  {
    y: 2,
    type: AssetTypes.EnemyAlan,
    animation: AnimationTypes.EnemyAlan,
  },
  {
    y: 3,
    type: AssetTypes.EnemyAlan,
    animation: AnimationTypes.EnemyAlan,
  },
];

export default class EnemiesManager {
  enemies: Phaser.Physics.Arcade.Group;

  constructor(private _scene: Phaser.Scene) {
    this.enemies = this._scene.physics.add.group({
      maxSize: 40,
      classType: Enemy,
      runChildUpdate: true,
    });
    this.enemies.setOrigin(0, 0);
    this.reset();
  }

  reset() {
    this.enemies.clear(true, true);
    this._create();
    this._animate();
  }

  private _create() {
    for (const { y, type, animation } of ENEMY_ROWS) {
      for (let x = 0; x < 10; x++) {
        const enemy: Enemy = new Enemy(
          this._scene,
          ORIGIN_X + x * 36,
          ORIGIN_Y + y * 36,
          type
        );
        this.enemies.add(enemy, true);
        enemy.setOrigin(0, 0);
        enemy.play(animation);
        enemy.setImmovable(false);
      }
    }
  }

  private _animate() {
    this.enemies.children.iterate((child) => {
      this._scene.tweens.add({
        targets: child,
        ease: "Linear",
        duration: 2000,
        x: "+=200",
        paused: false,
        delay: 0,
        yoyo: true,
        repeat: -1,
      });

      return true;
    });
  }
}
