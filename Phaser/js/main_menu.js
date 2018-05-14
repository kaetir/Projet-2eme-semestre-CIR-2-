var main_menu = {
	Logo : {},
	persos : {},
	CVs : {},

	create : function(){
		game.add.tileSprite(0, 0, 1152, 648, 'background'); 
		

		CVs = game.add.group();
		CVs.current = 0;

		/*
		description : passe en plein ecran
		argument : none
		return : none
		*/
		function gofull() {
			if (game.scale.isFullScreen){
				game.scale.stopFullScreen();
			}
			else{
				game.scale.startFullScreen(false);
			}
		};


		Logo = game.add.sprite(game.world.centerX, game.world.centerY , "logo");
		Logo.scale.setTo(0.7,0.7);
		Logo.anchor.setTo(0.5,0.8);

		// passage en plein écran
		var startingButton = game.add.button(game.world.centerX, game.world.centerY ,"boutons" , ()=>{
			gofull();
			startingButton.destroy();
			this.vraiMenu();
		
		},this); 
		startingButton.scale.setTo(0.5,0.5);
		startingButton.anchor.setTo(0.5,-0.5);

		startingButton.setFrames(17,15,16);




	},


	vraiMenu : function(){

		Logo.scale.setTo(0.5);
		Logo.anchor.setTo(0.5,1.2);


		persos = game.add.group();

		persos.create(game.world.centerX-300*3,game.world.centerY,"bosseur");
		persos.create(game.world.centerX-150*3,game.world.centerY,"gaffeur");
		persos.create(game.world.centerX+150*3,game.world.centerY,"susceptible");
		persos.create(game.world.centerX+300*3,game.world.centerY,"manipulateur");
		
		
		persos.scale.setTo(0.5);
		persos.callAll("anchor.setTo",0.5);


		persos.forEach((perso)=>{
			perso.animations.add('jump');
			perso.anchor.setTo(-1.5 ,0);
		})
		
		persos.callAll('animations.play', 'animations', 'jump', 12, true);

		persos.forEach((perso,index)=>{
			game.debug.spriteInfo(perso,32,32*(index+1));
		})

		
		var arcade = game.add.button(game.world.centerX - 250 - 100, game.world.centerY +100 ,"boutons", startArcade, this);
		arcade.scale.setTo(0.5,0.5);
		arcade.setFrames(2,0,1);

		var histoire = game.add.button(game.world.centerX +100 , game.world.centerY +100 ,"boutons", startHistory);
		histoire.scale.setTo(0.5,0.5);
		histoire.setFrames(11,9,10);

		var CV = game.add.button(10 ,10 ,"boutons", showCV);
		CV.scale.setTo(0.2);
		CV.setFrames(14,12,13);






		/*
		description : nettoie la scene et lance le mode arcade
		argument : none
		return : none
		*/
		function startArcade (){
			persos.destroy();
			CV.destroy();
			histoire.destroy();
			arcade.destroy();

			game.state.add("game", leJeu);
			game.state.start('game');
		};

		/*
		description : affiche les CVs
		argument : none
		return : none
		*/
		function showCV (){
			persos.destroy();
			CV.destroy();
			Logo.destroy();

			arcade.y += 50;
			histoire.y += 50;
			arcade.x -= 150;
			histoire.x += 150;
			
			CVs.create(game.world.centerX ,game.world.centerY, "CV_Bosseur");
			CVs.create(game.world.centerX ,game.world.centerY, "CV_Susceptible");
			CVs.create(game.world.centerX ,game.world.centerY, "CV_Gaffeur");
			CVs.create(game.world.centerX ,game.world.centerY, "CV_Manipulateur");
			CVs.forEach((cv)=>{
				cv.scale.setTo(0.4);
				cv.anchor.setTo(.5);
				cv.alpha = 0;
			})
			CVs.children[0].alpha = 1;
			var fleche_next = game.add.button(game.world.centerX +300 , game.world.centerY  ,"fleche_droite", nextCV);
			var fleche_previous = game.add.button(game.world.centerX -300 , game.world.centerY ,"fleche_gauche", previousCV);
			fleche_next.scale.setTo(0.5); 
			fleche_previous.scale.setTo(0.5); 
			fleche_previous.x -= fleche_previous.width;

		};

		function nextCV(){
			var tween = game.add.tween(CVs.children[CVs.current]).to( { alpha: 0 }, 1000, "Linear", true);
			var tween = game.add.tween(CVs.children[(CVs.current+1)%CVs.children.length]).to( { alpha: 1 }, 1000, "Linear", true);
			CVs.current = (CVs.current+1)%CVs.children.length;
		}
		function previousCV(){
			var tween = game.add.tween(CVs.children[CVs.current]).to( { alpha: 0 }, 1000, "Linear", true);
			var tween = game.add.tween(CVs.children[(CVs.current == 0)? 3 : (CVs.current-1) %CVs.children.length]).to( { alpha: 1 }, 1000, "Linear", true);
			CVs.current = (CVs.current == 0)? 3 : (CVs.current-1) %CVs.children.length;
		}


		/*
		description : nettoie la scene et lance le mode histoire
		argument : none
		return : none
		*/
		function startHistory (){
			persos.destroy();
			CV.destroy();
			histoire.destroy();
			arcade.destroy();

			leJeu.isArcade = 0;
			game.state.add("game", leJeu);
			game.state.start('game');
		};


	},

	render : ()=>{

	}



}

