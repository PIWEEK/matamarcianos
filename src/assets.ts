const ASSET_SRC_DIR = "assets";

export enum AssetTypes {
  Background = "asset-background",
  EnemyAlan = "asset-enemy-alan",
  EnemyBonbon = "asset-enemy-bonbon",
  EnemyLips = "asset-enemy-lips",
  EnemyBullet = "asset-enemy-bullet",
  Ship = "asset-ship",
  ShipBullet = "asset-ship-bullet",
  Explosion = "asset-explosion",
}

export type EnemiesAssetTypes =
  | AssetTypes.EnemyAlan
  | AssetTypes.EnemyBonbon
  | AssetTypes.EnemyLips;

export enum AssetSrc {
  Background = `${ASSET_SRC_DIR}/minipixelpack3/space_bg.png`,
  EnemyAlan = `${ASSET_SRC_DIR}/minipixelpack3/enemies/alan_sp.png`,
  EnemyBonbon = `${ASSET_SRC_DIR}/minipixelpack3/enemies/bonbon_sp.png`,
  EnemyLips = `${ASSET_SRC_DIR}/minipixelpack3/enemies/lips_sp.png`,
  EnemyBullet = `${ASSET_SRC_DIR}/minipixelpack3/enemies/bullet_sp.png`,
  Ship = `${ASSET_SRC_DIR}/minipixelpack3/ship/ship_sp.png`,
  ShipBullet = `${ASSET_SRC_DIR}/minipixelpack3/ship/bullet_sp.png`,
  Explosion = `${ASSET_SRC_DIR}/minipixelpack3/effects/explosion_sp.png`,
}

export function initializeAssets(scene: Phaser.Scene) {
  // Background
  scene.load.image(AssetTypes.Background, AssetSrc.Background);

  // Enemies
  scene.load.spritesheet(AssetTypes.EnemyAlan, AssetSrc.EnemyAlan, {
    frameWidth: 16,
    frameHeight: 16,
  });
  scene.load.spritesheet(AssetTypes.EnemyBonbon, AssetSrc.EnemyBonbon, {
    frameWidth: 16,
    frameHeight: 16,
  });
  scene.load.spritesheet(AssetTypes.EnemyLips, AssetSrc.EnemyLips, {
    frameWidth: 16,
    frameHeight: 16,
  });
  scene.load.spritesheet(AssetTypes.EnemyBullet, AssetSrc.EnemyBullet, {
    frameWidth: 16,
    frameHeight: 16,
  });

  // Ship
  scene.load.spritesheet(AssetTypes.Ship, AssetSrc.Ship, {
    frameWidth: 16,
    frameHeight: 16,
  });
  scene.load.spritesheet(AssetTypes.ShipBullet, AssetSrc.ShipBullet, {
    frameWidth: 16,
    frameHeight: 16,
  });

  // Effects
  scene.load.spritesheet(AssetTypes.Explosion, AssetSrc.Explosion, {
    frameWidth: 16,
    frameHeight: 16,
  });
}
