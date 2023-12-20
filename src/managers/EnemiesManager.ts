import * as Phaser from "phaser";
import { AnimationTypes } from "../animations";
import Enemy from "../objects/Enemy";
import { AssetTypes } from "../assets";

const MARGIN_X = 100;
const MARGIN_Y = 100;
const PADDING_X = 20;
const PADDING_Y = 20;

const ENEMY_WITH = 16;
const ENEMY_HEIGHT = 16;

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
const ENEMIES_PER_ROW = 10;

export default class EnemiesManager {
  private _enemies?: Phaser.Physics.Arcade.Group;

  constructor(private _scene: Phaser.Scene) {}

  get enemies() {
    if (!this._enemies)
      throw new Error("EnemiesManager: enemies group not initialized");

    return this._enemies;
  }

  initialize() {
    this._enemies = this._scene.physics.add.group({
      maxSize: 40,
      classType: Enemy,
      runChildUpdate: true,
    });
    this.enemies.setOrigin(0, 0);

    this.reset();
  }

  reset() {
    this.enemies.clear(true, true);
    this._populateEnemiesGroup();
  }

  private _populateEnemiesGroup() {
    for (const { y, type, animation } of ENEMY_ROWS) {
      for (let x = 0; x < ENEMIES_PER_ROW; x++) {
        const enemy: Enemy = new Enemy(
          this._scene,
          MARGIN_X + x * (ENEMY_WITH + PADDING_X),
          MARGIN_Y + y * (ENEMY_HEIGHT + PADDING_Y),
          type
        );
        this.enemies.add(enemy, true);
        enemy.play(animation);
        enemy.setImmovable(false);
      }
    }
    this._animateEnimiesGroup();
  }

  private _animateEnimiesGroup() {
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
