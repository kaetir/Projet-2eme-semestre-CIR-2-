define(["Phaser","boot"], function(Phaser,Ball){

    Ball.Preloader = function(game) {};

    Ball.Preloader.prototype = {
        preload: function() {

            /*Affichage du sprite de la barre de chargement*/

            this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');

            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('ball', 'img/ball.png');

            this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

            /*this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);*/
        },

        create: function() {
            this.game.state.start('main_menu');
        }
    };

});
