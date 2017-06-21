StartState = {};

StartState.preload = function () {
    this.game.load.spritesheet('start_button', 'images/start_button.png', 403, 110);

    this.game.load.image('background', 'images/background.png');
    this.game.load.image('fox_jump', 'images/fox-jump.png');
    this.game.load.image('house', 'images/house.png');
    this.game.load.image('ground', 'images/ground.png');

    
    this.game.load.audio('sfx:door', 'audio/door.wav');
}

StartState.init = function () {

}

StartState.create = function () {

    this.startsound = this.game.add.audio('sfx:door');

    this.game.add.image(0, 0, 'background');
    var fox = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fox_jump');
    fox.anchor.set(0.5);
    fox.scale.x = 2;
    fox.scale.y = 2;

    var starText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "Get the little fox to his home", { font: "65px Arial", fill: "#000", align: "center" });
    starText.anchor.set(0.5);

    var house = this.game.add.image(this.game.world.width, this.game.world.height - 53, 'house');
    house.scale.x = 2;
    house.scale.y = 2;
    house.anchor.set(1, 1);

    this.game.add.image(0, 546, 'ground');

    var button = this.game.add.button(this.game.world.centerX - 201, 400, 'start_button', this.startGame, this, 1, 0, 0);
}

StartState.startGame = function () {
    this.startsound.play();
    this.game.state.start('play', true, false, { level: 0, fill: '#ffffff' });
}