function boot(){
	
}
function preload () {

	game.load.image('background', 'assets/background/background_accueil.png', 'assets/sprite_sheet/json/manipulateur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.image("load_bar_vide", "assets/load_bar/load_bar_vide.png");
	game.load.image("load_bar_pleine", "assets/load_bar/load_bar_pleine.png");

	game.load.onFileComplete.add(fileComplete, this);

	var barre_vide;
	var barre_pleine;

	//	This callback is sent the following parameters:
	function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

		/*Affichage du sprite de la barre de chargement*/
		if(cacheKey == "background"){	
			game.add.tileSprite(0, 0, 1152, 648, 'background');
			if (barre_vide != undefined) barre_vide.bringToTop();
			if (barre_pleine != undefined) barre_pleine.bringToTop();
		}
		if(cacheKey == "load_bar_vide"){
			barre_vide = game.add.sprite(game.world.centerX -250,game.world.centerY, "load_bar_vide");
		}
		if(cacheKey == "load_bar_pleine"){	
			barre_pleine = game.add.sprite(game.world.centerX - 250,game.world.centerY, "load_bar_pleine");
			game.load.setPreloadSprite(barre_pleine);
		}
		
    	if(cacheKey == "boutons"){ //mettre ici la desnière ressource chargé	
    		barre_vide.destroy();
    		barre_pleine.destroy();
    	}

    }

    //game.stage.backgroundColor = '#1394a2';

    load();
};

function load() {

	game.load.image("logo", "assets/logo/trustMe_logo_app.png");
	game.load.audio('boden', ['assets/sound/Ambiance_1.ogg']);
	game.load.atlas('gaffeur', 'assets/sprite_sheet/gaffeur_sprite.png', 'assets/sprite_sheet/json/gaffeur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.atlas('bosseur', 'assets/sprite_sheet/bosseur_sprite.png', 'assets/sprite_sheet/json/bosseur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.atlas('susceptible', 'assets/sprite_sheet/susceptible_sprite.png', 'assets/sprite_sheet/json/susceptible_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.atlas('manipulateur', 'assets/sprite_sheet/manipulateur_sprite.png', 'assets/sprite_sheet/json/manipulateur_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.atlas('mec', 'assets/sprite_sheet/mec_sprite.png', 'assets/sprite_sheet/json/mec_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.atlas('meuf', 'assets/sprite_sheet/meuf_sprite.png', 'assets/sprite_sheet/json/meuf_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	game.load.image("table", "assets/table.png");
	game.load.image("fenetre", "assets/rencontre.png");
	game.load.image("sol", "assets/background/sol_32x32.png");
	
	game.load.atlas('boutons', 'assets/sprite_sheet/boutons_sprite.png', 'assets/sprite_sheet/json/boutons_sprite.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	
	
};

function create() {
	// game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.startSystem(Phaser.Physics.P2JS);
	

	// Stretch to fill
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	
	var current_music = game.add.audio('boden');
	current_music.play()
	current_music.loopFull(1);

	game.state.add("menu", main_menu);
	game.state.start("menu");
};