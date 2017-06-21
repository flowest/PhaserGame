StartState = {};

StartState.preload = function () {
    this.game.load.spritesheet('start_button', 'images/start_button.png', 403, 110);

    this.game.load.image('background', 'images/background.png');
    this.game.load.image('fox_jump', 'images/fox-jump.png');
}

StartState.init = function () {

}

StartState.create = function () {
    this.game.add.image(0, 0, 'background');
    var fox = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'fox_jump');
    fox.anchor.set(0.5);
    fox.scale.x = 2;
    fox.scale.y = 2;

    var starText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "Get the little fox to his home", { font: "65px Arial", fill: "#000", align: "center" });
    starText.anchor.set(0.5);

    var button = this.game.add.button(this.game.world.centerX - 201, 400, 'start_button', this.startGame, this, 1, 0, 0);
}

StartState.startGame = function () {
    this.game.state.start('play', true, false, { level: 0, fill: '#ffffff' });
}