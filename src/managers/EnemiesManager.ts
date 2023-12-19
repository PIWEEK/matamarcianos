import * as Phaser from "phaser";

import { AnimationTypes } from "../animations";

import Enemy from "../objects/Enemy";

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
    const ORIGIN_X = 100;
    const ORIGIN_Y = 100;

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 10; x++) {
        const enemy: Enemy = this.enemies.create(
          ORIGIN_X + x * 36,
          ORIGIN_Y + y * 36
        );
        enemy.setOrigin(0, 0);
        enemy.play(AnimationTypes.Enemy);
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
