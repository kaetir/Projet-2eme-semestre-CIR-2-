
var config = {
      type: Phaser.AUTO,
      width: 640,
      height: 480,
      parent: "jeu",
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create
      }
    };

var game = new Phaser.Game(config);


function preload() {

    this.load.spritesheet('button', 'Phaser/png/bouton_de_tes_morts.png', 250, 100);
}

var button;
var background;

function create() {


    button = this.add(Phaser.button(100, 400, 'button', actionOnClick, this, 2, 1, 0));

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
