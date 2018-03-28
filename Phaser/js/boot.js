define(["Phaser"], function(Phaser){
    var Ball = {
        _WIDTH: 680,
        _HEIGHT: 480
    };

    Ball.Boot = function(game) {};
    Ball.Boot.prototype = {
        /*Chargement des images nécéssaire au fonctionnement du preloader*/

        preload: function() {
            this.load.image('nom', 'chemin/loading-bar.png');
        },

        create: function() {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.state.start('preloader');
        }
    };

    return Ball;
});


