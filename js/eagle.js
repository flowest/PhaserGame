function Eagle(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'eagle');

    this.scale.x = 2;
    this.scale.y = 2;

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('crawl', [0, 1, 2, 3], 6, true);
    this.animations.play('crawl');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.allowGravity = 0;

    this.game.add.tween(this)
        .to({ y: y + 100 }, 800, Phaser.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .loop()
        .start();;
}

// inherit from Phaser.Sprite
Eagle.prototype = Object.create(Phaser.Sprite.prototype);
Eagle.prototype.constructor = Eagle;

// Spider.prototype.update = function () {

// };
Eagle.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};

