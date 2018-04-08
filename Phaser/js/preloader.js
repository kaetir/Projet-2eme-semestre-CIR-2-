function preload() {

    /*Affichage du sprite de la barre de chargement*/

    //this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');

    //this.load.setPreloadSprite(this.preloadBar);

    //this.load.image('ball', 'img/ball.png');

    //this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

    /*this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);*/

    
    game.load.atlas('gaffeur', 'assets/sprite_sheet/gaffeur_sprite.png', 'assets/sprite_sheet/json/gaffeur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('bosseur', 'assets/sprite_sheet/bosseur_sprite.png', 'assets/sprite_sheet/json/bosseur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('susceptible', 'assets/sprite_sheet/susceptible_sprite.png', 'assets/sprite_sheet/json/susceptible_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('manipulateur', 'assets/sprite_sheet/manipulateur_sprite.png', 'assets/sprite_sheet/json/manipulateur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.atlas('boutons', 'assets/sprite_sheet/boutons_sprite.png', 'assets/sprite_sheet/json/boutons_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);




    /*this.game.load.atlasJSONArray('boutons_sprite', 'assets/sprite_sheet/boutons_sprite.png', "assets/sprite_sheet/boutons_sprite.json");
    
    sprite = this.game.add.sprite(100, 180, 'boutons_sprite', 'bouton_arcade');
    
    */

};



function create() {
    game.state.add("main_menu", main_menu);
    game.state.start("main_menu");


}
