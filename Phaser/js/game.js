

var leJeu = {


	map:{},
	femelle :{},
	Billy :{},
	LaTabola : {},
	create : function(){
		game.add.tileSprite(0, 0, 1152, 648, 'background');
		game.add.tileSprite(0,548,1152,300,'sol');


		LaTabola = game.add.sprite(300,500,"table");
		Billy =  game.add.sprite(500,320,"bosseur");
		femelle = game.add.sprite(0,370, "meuf" );
	

		femelle.scale.setTo(0.5,0.5);
		Billy.scale.setTo(0.5,0.5);
		LaTabola.scale.setTo(0.5,0.5);	


		femelle.animations.add('jump');

		game.physics.enable(Billy, Phaser.Physics.ARCADE);
		game.physics.enable(femelle, Phaser.Physics.ARCADE);

		
		femelle.body.collideWorldBounds = true;
		femelle.body.center.setTo(100,100);		
		
		Billy.body.collideWorldBounds = true;
		Billy.body.immovable = true;
		Billy.body.bounce.setTo(1, 1);


		Billy.body.onCollide = new Phaser.Signal();
		Billy.body.onCollide.add(hitSprite, this);

		ELLESUCE = false;
		function hitSprite (sprite1, sprite2) {
			if(!ELLESUCE)
				if(confirm("COOP ?")){
					ELLESUCE = true;
					Billy.body.collideWorldBounds = false;
				}
		}

	},


	update : function() {
		//  only move when you click
		if (game.input.mousePointer.isDown){
			//  100 is the speed it will move towards the mouse
			game.physics.arcade.moveToPointer(femelle, 250);
			femelle.body.velocity.y = 0;
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
		if(!ELLESUCE)
			game.physics.arcade.collide(femelle, Billy);
		game.physics.arcade.collide(femelle, LaTabola);
	},
	render : function(){
		// game.debug.bodyInfo(Billy, 32, 32);
		// game.debug.body(femelle);
		// game.debug.body(Billy);
		

	} 
}

