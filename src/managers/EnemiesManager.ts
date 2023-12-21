import * as Phaser from "phaser";
import Enemy from "../objects/Enemy";
import EnemyBullet from "../objects/EnemyBullet";
import { AssetTypes } from "../assets";
import { AnimationTypes } from "../animations";

const MARGIN_X = 100;
const MARGIN_Y = 100;
const PADDING_X = 20;
const PADDING_Y = 20;

const ENEMY_WITH = 16;
const ENEMY_HEIGHT = 16;

const ENEMIES_PER_ROW = 12;
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
const SHOT_FREQUENCY = 400; // ms

export default class EnemiesManager {
  private _enemies?: Phaser.Physics.Arcade.Group;
  private _bullets?: Phaser.Physics.Arcade.Group;
  private _shottingTime: number = 0;

  constructor(private _scene: Phaser.Scene) {}

  get enemies() {
    if (!this._enemies)
      throw new Error("EnemiesManager: enemies group not initialized");

    return this._enemies;
  }

  get bullets() {
    if (!this._bullets)
      throw new Error("EnemiesManager: bullets group not initialized");

    return this._bullets;
  }

  initialize() {
    this._enemies = this._scene.physics.add.group({
      maxSize: ENEMY_ROWS.length * ENEMIES_PER_ROW,
      classType: Enemy,
      runChildUpdate: true,
    });
    this.enemies.setOrigin(0, 0);

    this._bullets = this._scene.physics.add.group({
      max: 0,
      classType: EnemyBullet,
      runChildUpdate: true,
    });
    this.bullets.setOrigin(0.5, 1);

    this.reset();
  }

  update() {
    if (this._scene.time.now > this._shottingTime) this._shot();
  }

  reset() {
    this.bullets.clear(true, true);
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

  private _getRandomEnemy() {
    const random = Phaser.Math.RND.integerInRange(
      0,
      this.enemies.children.size
    );
    return this.enemies.children.getArray()[random] as Enemy;
  }

  private _shot() {
    const bullet: EnemyBullet = this.bullets.get();
    const enemy: Enemy = this._getRandomEnemy();

    if (enemy && bullet) {
      bullet.setPosition(enemy.x, enemy.y);
      this._scene.physics.moveTo(bullet, enemy.x, 1000, 120);

      this._shottingTime = this._scene.time.now + SHOT_FREQUENCY;
    }
  }
}
