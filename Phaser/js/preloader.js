define(["Phaser"], function(Phaser){
    var Ball = {
        _WIDTH: 680,
        _HEIGHT: 480
    };

    Ball.preload = function(game) {

        /*Affichage du sprite de la barre de chargement*/

        //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');

        //this.load.setPreloadSprite(this.preloadBar);

        //this.load.image('ball', 'img/ball.png');

        //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

        /*this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);*/
        this.load.json('boutons_json', 'asset/img/boutons_sprite.json');
        this.load.atlas('boutons_sprite', 'asset/img/boutons_sprite.png',null, "boutons_json");
    };

    Ball.create = function() {
        this.game.state.start('boot');
    };
    return Ball;
});
