

require.config({
    // Par défaut, aller chercher les modules dans le dossier js/
    baseUrl: 'js',
    // Définition des raccourcis
    paths: {
    	Phaser: 		'libs/phaser'
    },
    // Encapsulation des bibliothèques externes dans des modules
    shim: {
    	Phaser: {
    		exports: 'Phaser'
    	}
    }
});


require(['Phaser',"main_menu","preloader","game","boot", "how_to"],
	function(Phaser,main_menu, preloader, game  , boot, how_to) {

    	var game = new Phaser.Game(680, 480, Phaser.AUTO,'phaser-example');
    		
    	/*Chaque état appelle le suivant.*/

    	game.state.add('preloader', preloader);	/*Préchargement*/
    	game.state.add('boot', boot);				/*Premier état du jeu, le démarage.*/
    	game.state.add('main_menu', main_menu);
    	game.state.add('how_to', how_to);
    	//game.state.add('game', );
    	game.state.start('preloader');
		
});


