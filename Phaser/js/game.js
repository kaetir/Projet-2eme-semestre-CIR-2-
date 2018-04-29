

var leJeu = {

	Femelle :{},
	Billy :{},
	LaTabola : {},
	fenetreInteraction : {},
	cursors : {},

	create : function(){
		game.add.tileSprite(0, 0, 1920, 548, 'background');
		game.add.tileSprite(0,548,1920,300,'sol');
		game.world.setBounds(0, 0, 1920, 748);

		fenetreInteraction = game.add.sprite(game.camera.x+game.width/2,game.camera.y+game.height/2,"fenetre");
		fenetreInteraction.alpha = 0;
		fenetreInteraction.scale.setTo(0.85);
		fenetreInteraction.anchor.setTo(0.5,0.5);

		fenetreInteraction.fixedToCamera = true;

		LaTabola = game.add.sprite(300,500,"table");
		Billy =  game.add.sprite(500,300,"bosseur");
		Femelle = game.add.sprite(0,500, "meuf" );


		Femelle.scale.setTo(0.5);
		Billy.scale.setTo(0.5);
		LaTabola.scale.setTo(0.5);	


		Femelle.animations.add('jump');

		game.physics.p2.enable([Femelle,Billy],false);

		Femelle.body.fixedRotation = true;
		Billy.body.fixedRotation = true;

		Femelle.body.onBeginContact.add(blockHit, this);

		ELLESUCE = false;

		function blockHit (body, bodyB, shapeA, shapeB, equation) {
 		   	//  This callback is sent 5 arguments:

    		//  The Phaser.Physics.P2.Body it is in contact with. *This might be null* if the Body was created directly in the p2 world.
    		//  The p2.Body this Body is in contact with.
    		//  The Shape from this body that caused the contact.
    		//  The Shape from the contact body.
    		//  The Contact Equation data array.
    	
    		//  The first argument may be null or not have a sprite property, such as when you hit the world bounds.
    		if (body){
    			if(!ELLESUCE){
    			//remplacer le texte si dessous par un text de demande coop
    			fenetreInteraction.alpha = 1;
    			fenetreInteraction.bringToTop();
    			var text = "T'es bonne femmelle\n tu veux boire un café";
    			var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

	    		var t = game.add.text(game.camera.x+game.width/2, game.camera.y+50, text, style);
	    		t.anchor.setTo(0.5);
	    		t.fixedToCamera = true;
	    		ELLESUCE = true;
				
				}
    		}

    	}
    	
		cursors = game.input.keyboard.createCursorKeys();
		game.camera.follow(Femelle);

		},


		update : function() {
			Femelle.body.setZeroVelocity();

			if (cursors.up.isDown)
			{
				if(Femelle.body.y > 430)
					Femelle.body.moveUp(300)
			}
			else if (cursors.down.isDown)
			{
				Femelle.body.moveDown(300);
			}

			if (cursors.left.isDown)
			{
				Femelle.animations.play('jump', 15, false);
				Femelle.body.velocity.x = -300;
			}
			else if (cursors.right.isDown)
			{
				Femelle.animations.play('jump', 15, false);
				Femelle.body.moveRight(300);
			}
		/*
		//  only move when you click
		if (game.input.mousePointer.isDown){
			//  100 is the speed it will move towards the mouse
			game.physics.arcade.moveToPointer(Femelle, 250);
			Femelle.body.velocity.y = 0;
			//  if it's overlapping the mouse, don't move any more
			if (Phaser.Rectangle.contains(Femelle.body, game.input.x, game.input.y)){
				Femelle.body.velocity.setTo(0, 0);
			}else{
				Femelle.animations.play('jump', 12, false);
			}
		}
		else{
			Femelle.body.velocity.setTo(0, 0);
		}
		*/
		// if(!ELLESUCE)
		// 	game.physics.arcade.collide(Femelle, Billy);

	},
	render : function(){
		
		// game.debug.body(Femelle);
		// game.debug.body(Billy);
		// game.debug.cameraInfo(game.camera, 32, 32);
		// game.debug.spriteCoords(Femelle, 32, 500);

	} 
}

