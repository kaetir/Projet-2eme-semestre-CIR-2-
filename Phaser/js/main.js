

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


require(['Phaser',"main_menu","preloader","game","boot"],
	function(Phaser,main_menu, preloader, game  , Ball) {

		

    	var game = new Phaser.Game(680, 480, Phaser.AUTO,'phaser-example');
    		
    	/*Chaque état appelle le suivant.*/

    	game.state.add('boot', Ball.Boot);				/*Premier état du jeu, le démarage.*/
    	game.state.add('preloader', Ball.Preloader);	/*Préchargement*/
    	game.state.add('main_menu', Ball.MainMenu);
    	game.state.add('how_to', Ball.Howto);
    	game.state.add('game', Ball.Game);
    	game.state.start('boot');
		
});


