

var leJeu = {


	femelle :{},
	Billy :{},
	create : function(){
		game.add.tileSprite(0, 0, 800, 600, 'background'); 
		femelle = game.add.sprite(0,0, "meuf" );
		Billy =  game.add.sprite(500,0,"bosseur");
		// Billy.scale.setTo(0.3,0.3);

		tween = game.add.tween(femelle.scale).to( { x: 0.3, y: 0.3 }, 3000, Phaser.Easing.Elastic.Out, true);
		twee1 = game.add.tween(Billy.scale).to( { x: 0.3, y: 0.3 }, 3000, Phaser.Easing.Elastic.Out, true);
		
		femelle.animations.add('jump');

		game.physics.enable(Billy, Phaser.Physics.ARCADE);
		game.physics.enable(femelle, Phaser.Physics.ARCADE);

		
		
		femelle.body.collideWorldBounds = true;
		// femelle.body.velocity.x = 200;
		femelle.body.bounce.setTo(1, 1);

		Billy.body.collideWorldBounds = true;
		Billy.body.immovable = true;
		Billy.body.bounce.setTo(1, 1);

		Billy.body.onCollide = new Phaser.Signal();
		Billy.body.onCollide.add(hitSprite, this);

		ELLESUCE = false;
		function hitSprite (sprite1, sprite2) {
			if(!ELLESUCE)
				if(confirm("TU SUCE"))
					ELLESUCE = true;
		}


	},


	update : function() {
		//  only move when you click
		if (game.input.mousePointer.isDown){
			//  100 is the speed it will move towards the mouse
			game.physics.arcade.moveToPointer(femelle, 250);

			//  if it's overlapping the mouse, don't move any more
			if (Phaser.Rectangle.contains(femelle.body, game.input.x, game.input.y)){
				femelle.body.velocity.setTo(0, 0);
			}else{
				femelle.animations.play('jump', 12, false);
			}
		}
		else{
			femelle.body.velocity.setTo(0, 0);
		}
		game.physics.arcade.collide(femelle, Billy);
	},
	render : function(){
		game.debug.bodyInfo(Billy, 32, 32);
		game.debug.body(femelle);
		game.debug.body(Billy);

	} 
}
