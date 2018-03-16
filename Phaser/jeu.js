
var game = new Phaser.Game(680, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'png/bouton_de_tes_morts.png', 250, 100);

}

var button;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    button = game.add.button(game.world.centerX - 125, game.world.centerY- 50, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;

}
