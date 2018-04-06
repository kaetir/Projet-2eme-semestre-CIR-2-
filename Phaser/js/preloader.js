define(["Phaser"], function(Phaser){
    var game = function() {

    };
    game.prototype.preload = function() {

        /*Affichage du sprite de la barre de chargement*/

        //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');

        //this.load.setPreloadSprite(this.preloadBar);

        //this.load.image('ball', 'img/ball.png');

        //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

        /*this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);*/

        this.game.load.atlasJSONArray('boutons_sprite', 'asset/img/boutons_sprite.png', "asset/img/boutons_sprite.json");
        
        sprite = this.game.add.sprite(100, 180, 'boutons_sprite', 'bouton_arcade');
        
        var bouton = this.game.add.button(this.game.world.centerX - 95, 400,"bouton_arcade", actionOnClick, this, 'over', 'out', 'down');
        bouton.onInputOver.add(over, this);
        bouton.onInputOut.add(out, this);


        function over() {
            console.log('button over');
        }

        function out() {
            console.log('button out');
        }

        function actionOnClick () {
            background.visible =! background.visible;
        }


        var actionOnClick = function(){
            this.game.state.start('boot');
        }

    };

    
    return game;
});
