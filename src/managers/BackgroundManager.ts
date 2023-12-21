import * as Phaser from "phaser";
import { AssetTypes } from "../assets";

export default class BackgroundManager {
  private _background?: Phaser.GameObjects.TileSprite;

  constructor(private _scene: Phaser.Scene) {}

  public get background() {
    if (!this._background)
      throw new Error("BackgroundManager: background not initialized");

    return this._background;
  }

  initialize() {
    this._background = this._scene.add
      .tileSprite(0, 0, 800, 600, AssetTypes.Background)
      .setOrigin(0, 0);
  }

  update() {
    this.background.tilePositionY -= 1;
  }
}
