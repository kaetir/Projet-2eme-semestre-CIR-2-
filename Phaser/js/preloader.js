function preload() {

    /*Affichage du sprite de la barre de chargement*/

    //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');

    //this.load.setPreloadSprite(this.preloadBar);

    //this.load.image('ball', 'img/ball.png');

    //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

    /*this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);*/

    
    game.load.atlas('gaffeur', 'asset/img/gaffeur_sprite.png', 'asset/img/gaffeur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

    
    game.load.atlas('bouton', 'asset/img/boutons_sprite.png', 'asset/img/boutons_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


    /*this.game.load.atlasJSONArray('boutons_sprite', 'asset/img/boutons_sprite.png', "asset/img/boutons_sprite.json");
    
    sprite = this.game.add.sprite(100, 180, 'boutons_sprite', 'bouton_arcade');
    
    */

};



function create() {
    
    var bouton = this.game.add.button(this.game.world.centerX - 250, 400,"bouton", actionOnClick, this,);
    
    bouton.onInputOver.add(over, this);
    bouton.onInputOut.add(out, this);

    var billy =game.add.sprite(0,0,"gaffeur");
    billy.scale.setTo(0.5,0.5);
    billy.anchor.setTo(0,0);
    billy.animations.add('jump');
    billy.animations.play('jump', 20, true);


    function over() {
        console.log('button over');
    }

    function out() {
        console.log('button out');
    }

    function actionOnClick () {
        console.log('click');
    }


    var actionOnClick = function(){
        //this.game.state.start('boot');
    }





}
