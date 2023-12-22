import * as Phaser from "phaser";
import { AnimationTypes } from "../animations";
import { AssetTypes, EnemiesAssetTypes } from "../assets";
import Explosion from "../objects/Explosion";

const ENEMIS = {
  [AssetTypes.EnemyAlan]: {
    lifes: 1,
    animation: AnimationTypes.EnemyAlan,
    score: 100,
  },
  [AssetTypes.EnemyBonbon]: {
    lifes: 2,
    animation: AnimationTypes.EnemyBonbon,
    score: 500,
  },
  [AssetTypes.EnemyLips]: {
    lifes: 3,
    animation: AnimationTypes.EnemyLips,
    score: 1000,
  },
};

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  private _lifes: number = 0;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    type: EnemiesAssetTypes
  ) {
    super(scene, x, y, type);
    this._lifes = ENEMIS[type].lifes;

    // add to the scene physics
    scene.physics.add.sys.displayList.add(this);
    scene.physics.add.sys.updateList.add(this);
    // create a dynamic body for it
    scene.physics.add.existing(this);

    this.play(ENEMIS[type].animation);
    this.setImmovable(false);
  }

  kill(explosion: Explosion) {
    this._lifes -= 1;

    if (this._lifes > 0) {
      explosion.destroy();
      return;
    }

    explosion.setX(this.x);
    explosion.setY(this.y);
    explosion.play(AnimationTypes.Explosion);
    this.destroy();
  }
}
