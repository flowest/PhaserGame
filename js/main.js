const LEVEL_COUNT = 5;

window.onload = function () {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('start', StartState);
    game.state.add('play', PlayState);
    // game.state.start('play', true, false, { level: 0 });
    game.state.start('start');
};