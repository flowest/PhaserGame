function Frog(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'frog');

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
    // this.body.velocity.x = Spider.SPEED;
}

// inherit from Phaser.Sprite
Frog.prototype = Object.create(Phaser.Sprite.prototype);
Frog.prototype.constructor = Frog;

// Spider.prototype.update = function () {

// };