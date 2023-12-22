import { AssetTypes } from "./assets";

export enum AnimationTypes {
  EnemyAlan = "animation-enemy-alan",
  EnemyBonbon = "animation-enemy-bonbon",
  EnemyLips = "animation-enemy-lips",
  EnemyBullet = "animation-enemy-bullet",
  ShipBullet = "animation-ship-bullet",
  Explosion = "animation-explosion",
}

export function initializeAnimations(scene: Phaser.Scene) {
  // Enemies
  scene.anims.create({
    key: AnimationTypes.EnemyAlan,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyAlan, {
      start: 0,
      end: 5,
    }),
    frameRate: 8,
    repeat: -1,
  });

  scene.anims.create({
    key: AnimationTypes.EnemyBonbon,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyBonbon, {
      start: 0,
      end: 5,
    }),
    frameRate: 8,
    repeat: -1,
  });

  scene.anims.create({
    key: AnimationTypes.EnemyLips,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyLips, {
      start: 0,
      end: 5,
    }),
    frameRate: 8,
    repeat: -1,
  });

  scene.anims.create({
    key: AnimationTypes.EnemyBullet,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyBullet, {
      start: 0,
      end: 3,
    }),
    frameRate: 8,
    repeat: -1,
  });

  // Ship
  scene.anims.create({
    key: AnimationTypes.ShipBullet,
    frames: scene.anims.generateFrameNumbers(AssetTypes.ShipBullet, {
      start: 0,
      end: 3,
    }),
    frameRate: 8,
    repeat: -1,
  });

  // Explosion
  scene.anims.create({
    key: AnimationTypes.Explosion,
    frames: scene.anims.generateFrameNumbers(AssetTypes.Explosion, {
      start: 0,
      end: 5,
    }),
    frameRate: 8,
    repeat: 0,
  });
}
