
var style = { font: "65px Arial", fill: "#1394a2ff", align: "center" };

var leJeu = {
	isArcade : true,
	Femelle  : {},
	Billy 	 : {},
	Jeanne 	 : {},
	Teemo	 : {},
	Ed 		 : {},
	LaTabola : {},
	fenetreInteraction : {},
	cursors : {},
	Jour : 0,
	cooperate : false,
	ELLESUCE : false,
	Game : new JEU(),

	create : function(){
		var Betray_1 = game.add.audio('Betray_1');
		var Betray_2 = game.add.audio('Betray_2');
		var Coop_1 = game.add.audio('Coop_1');
		var Coop_2 = game.add.audio('Coop_2');

		game.add.tileSprite(0, 0, 2500, 548, 'background');
		game.add.tileSprite(0,548,2500,200,'sol');
		game.world.setBounds(0, 0, 2500, 748);

		LaTabola = game.add.sprite(300,500,"table");
		LaTabola2 = game.add.sprite(1000,500,"table");
		snack = game.add.sprite(1370,280,"snack");
		crayon = game.add.sprite(1055,505,"crayon");
		

		
		Billy =  game.add.sprite(560,450,"bosseur");
		Jeanne =  game.add.sprite(1500,480,"susceptible");
		Teemo =  game.add.sprite(2000,450,"gaffeur");
		Ed =  game.add.sprite(1300,470,"manipulateur");

		Femelle = game.add.sprite(0,500, "meuf" );


		Femelle.scale.setTo(0.5);
		Billy.scale.setTo(0.5);
		Jeanne.scale.setTo(0.5);
		Teemo.scale.setTo(0.5);
		Ed.scale.setTo(0.5);
		
		
		LaTabola.scale.setTo(0.5);	
		LaTabola2.scale.setTo(0.5);	
		snack.scale.setTo(0.4);	
		crayon.scale.setTo(0.05);	
		crayon.angle = 35;	


		Femelle.animations.add('jump');
		Teemo.animations.add('jump');
		Teemo.animations.play('jump',15, true);

		game.physics.p2.enable([Femelle,Billy,Jeanne,Teemo,Ed],false);

		Billy.body.static = true;
		Jeanne.body.static = true;
		Ed.body.static = true;
		
		Ed.scale.x *= -1;
		Ed.body.angle = -5;
		
		Teemo.body.fixedRotation = true;
		Teemo.body.moveRight(200);


		Femelle.body.fixedRotation = true;
		Femelle.body.onBeginContact.add(blockHit, this);


		Billy.body.joueur = game.Game.tabJoueur[0];
		Jeanne.body.joueur = game.Game.tabJoueur[1];
		Teemo.body.joueur = game.Game.tabJoueur[2];
		Ed.body.joueur = game.Game.tabJoueur[3];

		/*
		description : fonction de gestion des colision de la femmelle
		argument : RTFM
		return : null
		*/
		function blockHit (body, bodyB, shapeA, shapeB, equation) {

			//  The first argument may be null or not have a sprite property, such as when you hit the world bounds.
			if (body){
				
				body.removeNextStep = true;
				body.sprite.animations.stop("jump");
				if(!this.sELLESUCE){
				//remplacer le texte si dessous par un text de demande coop
				var text = "Tu peux m'aider pour le projet ?\n tu veux boire un café ?";

				fenetreInteraction = game.add.sprite(game.width/2,game.camera.y+game.height/2-100,"fenetre");
				fenetreInteraction.scale.setTo(0.85);
				fenetreInteraction.anchor.setTo(0.5);
				fenetreInteraction.fixedToCamera = true;


				var t = fenetreInteraction.addChild(game.make.text(-game.camera.x, 0, text, style));
				t.anchor.setTo(0.5,2);
				t.fixedToCamera = true;

				var coop = fenetreInteraction.addChild(game.make.button(0,0,"boutons" , ()=>{
					fenetreInteraction.destroy();
					this.ELLESUCE = false;
					cooperate = true;
					if(getRandomInt(2) == 1)
						Coop_1.play();
					else
						Coop_2.play();

					game.Game.tabJoueur[4].trade(true,body.joueur,game.Game);


				}, this));
				coop.setFrames(8,6,7);
				coop.scale.setTo(0.5);
				coop.x -= coop.width-50;
				coop.anchor.setTo(0.5,-1);


				var betray = fenetreInteraction.addChild(game.make.button(0,0,"boutons" , ()=>{
					fenetreInteraction.destroy();

					this.ELLESUCE = false;
					cooperate = false;
					if(getRandomInt(2) == 1)
						Betray_1.play();
					else
						Betray_2.play();
				
					game.Game.tabJoueur[4].trade(false,body.joueur,game.Game);
				

				}, this));
				betray.setFrames(5,3,4);
				betray.scale.setTo(0.5);
				betray.x += betray.width-50;
				betray.anchor.setTo(0.5,-1);

				this.ELLESUCE = true;


			}
		}

	}

	 

	cursors = game.input.keyboard.createCursorKeys();
	game.camera.follow(Femelle);

},


update : function() {
	Ed.angle += 1;
	Femelle.body.setZeroVelocity();
		var speed = 300; //mettre a 300 hors test
		if(!this.ELLESUCE){
			
			if (cursors.up.isDown)
			{
				if(Femelle.body.y > 430)
					Femelle.body.moveUp(speed)
			}
			else if (cursors.down.isDown)
			{
				Femelle.body.moveDown(speed);
			}
			if (cursors.left.isDown || (game.input.activePointer.leftButton.isDown && game.input.activePointer.x <= this.game.width/4))
			{
				Femelle.animations.play('jump', 15, false);
				Femelle.body.velocity.x = -speed;
			}
			else if (cursors.right.isDown || (game.input.activePointer.leftButton.isDown && game.input.activePointer.x >= (3*this.game.width/4) ))
			{
				if(Femelle.x >= 2400){
					game.Game.autoTrade();
					this.Jour++;
					if(this.Jour <= 2){
						game.state.start(game.state.current);
					}else{
						game.state.add("end", end);
            			game.state.start('end');
					}
				}
				else{
					Femelle.animations.play('jump', 15, false);
					Femelle.body.moveRight(speed);
				}
			}
		}
		if(Teemo.body.x>=2300){			
			Teemo.body.setZeroVelocity();
			Teemo.body.moveLeft(200);
		}
		else if(Teemo.body.x<1800){
			Teemo.body.setZeroVelocity();
			Teemo.body.moveRight(200);
		}
	},
	render : function(){

		// game.debug.cameraInfo(game.camera, 32, 32);
		// game.debug.spriteCoords(Femelle, 32, 500);

	} 

}



