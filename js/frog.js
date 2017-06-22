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
    

    this.body.bounce.y = 1;
    this.body.velocity.x = Frog.SPEED;

    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(hitWorldBounds, this);
}

// inherit from Phaser.Sprite
Frog.prototype = Object.create(Phaser.Sprite.prototype);
Frog.prototype.constructor = Frog;

Frog.SPEED = 400;

// Spider.prototype.update = function () {

// };

function hitWorldBounds(frog){
    
    if (this.body.touching.right || this.body.blocked.right) {
        this.body.velocity.x = -Frog.SPEED; // turn left
    }
    else if (this.body.touching.left || this.body.blocked.left) {
        this.body.velocity.x = Frog.SPEED; // turn right
    }
}

Frog.prototype.die = function () {
    this.body.enable = false;
    this.kill();
};