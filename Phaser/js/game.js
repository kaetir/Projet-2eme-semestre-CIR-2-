
var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

var leJeu = {

	Femelle :{},
	Billy :{},
	LaTabola : {},
	fenetreInteraction : {},
	cursors : {},
	Jour : 0,
	cooperate : false,
	ELLESUCE : false,

	create : function(){
		game.add.tileSprite(0, 0, 2500, 548, 'background');
		game.add.tileSprite(0,548,2500,300,'sol');
		game.world.setBounds(0, 0, 2500, 748);

		LaTabola = game.add.sprite(300,500,"table");
		LaTabola2 = game.add.sprite(1000,500,"table");
		Billy =  game.add.sprite(560,450,"bosseur");
		Jeanne =  game.add.sprite(1500,450,"susceptible");
		PUTE404 =  game.add.sprite(2000,450,"gaffeur");
		Femelle = game.add.sprite(0,500, "meuf" );


		Femelle.scale.setTo(0.5);
		Billy.scale.setTo(0.5);
		Jeanne.scale.setTo(0.5);
		PUTE404.scale.setTo(0.5);
		LaTabola.scale.setTo(0.5);	
		LaTabola2.scale.setTo(0.5);	


		Femelle.animations.add('jump');
		PUTE404.animations.add('jump');
		PUTE404.animations.play('jump',15, true);

		game.physics.p2.enable([Femelle,Billy,Jeanne,PUTE404],false);

		Billy.body.static = true;
		Jeanne.body.static = true;
		PUTE404.body.moveRight(200);


		Femelle.body.fixedRotation = true;
		Femelle.body.onBeginContact.add(blockHit, this);

		/*
		description : fonction de gestion des colision de la femmelle
		argument : RTFM
		return : null
		*/
		function blockHit (body, bodyB, shapeA, shapeB, equation) {

    		//  The first argument may be null or not have a sprite property, such as when you hit the world bounds.
    		if (body){
    			
    			var Betray_1 = game.add.audio('Betray_1');
				var Betray_2 = game.add.audio('Betray_2');
				var Coop_1 = game.add.audio('Coop_1');
				var Coop_2 = game.add.audio('Coop_2');
    			
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
	    			Coop_1.play();
        		}, this));
        		coop.setFrames(8,6,7);
        		coop.scale.setTo(0.5);
        		coop.x -= coop.width-50;
        		coop.anchor.setTo(0.5,-1);


        		var betray = fenetreInteraction.addChild(game.make.button(0,0,"boutons" , ()=>{
            		fenetreInteraction.destroy();
	    			this.ELLESUCE = false;
	    			cooperate = false;
	    			Betray_1.play();
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
			Femelle.body.setZeroVelocity();
			var speed = 600; //mettre a 300 hors test
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

				if (cursors.left.isDown)
				{
					Femelle.animations.play('jump', 15, false);
					Femelle.body.velocity.x = -speed;
				}
				else if (cursors.right.isDown)
				{
					if(Femelle.x >= 2400){
						console.log(this.Jour);
						this.Jour++;
						game.state.start(game.state.current);
					}
					else{
					Femelle.animations.play('jump', 15, false);
					Femelle.body.moveRight(speed);
					}
				}
			}

			if(PUTE404.body.x>=2300){			
				PUTE404.body.setZeroVelocity();
				PUTE404.body.moveLeft(200);
			}
			else if(PUTE404.body.x<1800){
				PUTE404.body.setZeroVelocity();
				PUTE404.body.moveRight(200);
			}
	},
	render : function(){
		
		// game.debug.cameraInfo(game.camera, 32, 32);
		game.debug.spriteCoords(Femelle, 32, 500);

	} 
}

