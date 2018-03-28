define(["Phaser"], function(Phaser){
    var Ball = {
        _WIDTH: 680,
        _HEIGHT: 480
    };

    Ball.Boot = function(game) {};
    Ball.Boot.prototype = {
        /*Chargement des images nécéssaire au fonctionnement du preloader*/

        preload: function() {
            this.load.json('boutons_json', 'asset/img/boutons_sprite.json');
            this boutonsJSON = game.cache.getJSON('boutons_json');
            this.load.atlas('boutons', 'asset/img/boutons_sprite.png',null, boutonsJSON);
        },

        create: function() {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.state.start('main_menu');
        }
    };

    return Ball;
});


