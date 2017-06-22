function Opossum(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'opossum');

    this.scale.x = -2;
    this.scale.y = 2;

    // anchor
    this.anchor.set(0.5);
    // animation
    this.animations.add('crawl', [0, 1, 2, 3, 4, 5], 8, true);
    this.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
    this.animations.play('crawl');

    // physic properties
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.velocity.x = Opossum.SPEED;
}

Opossum.SPEED = 200;

// inherit from Phaser.Sprite
Opossum.prototype = Object.create(Phaser.Sprite.prototype);
Opossum.prototype.constructor = Opossum;

Opossum.prototype.update = function () {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -Opossum.SPEED; // turn left
        this.scale.x = 2;
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = Opossum.SPEED; // turn right
        this.scale.x = -2;
    }
};

Opossum.prototype.die = function () {
    this.body.enable = false;

    this.animations.play('die').onComplete.addOnce(function () {
        this.kill();
    }, this);
};

Opossum.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};