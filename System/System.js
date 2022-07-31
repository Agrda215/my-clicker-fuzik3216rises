/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class System extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./System/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./System/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./System/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.coins = 0;
    this.stage.vars.idef = [];
    for (let i = 0; i < 72; i++) {
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      this.stage.vars.idef.push("Thing guys?");
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.coins += 1;
  }
}
