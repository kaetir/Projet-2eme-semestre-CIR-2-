

var leJeu = {


	map:{},
	femelle :{},
	Billy :{},
	LaTabola : {},
	create : function(){
		game.add.tileSprite(0, 0, 800, 600, 'background');
		game.add.tileSprite(100, 100, 600, 400, 'sol');
		// map = game.add.tilemap();
		// map.addTilesetImage('sol');

		// layer1 = map.create('level1', 40, 30, 32, 32);
		// layer1.resizeWorld();	
		// for(var i = 0 ; i < 40; i++){
		// 	for (var j = 0; j < 30; j++) {
		// 		map.putTile("sol", i, j, layer1);
		// 	}
		// }

		LaTabola = game.add.sprite(300,200,"table");
		Billy =  game.add.sprite(500,0,"bosseur");
		femelle = game.add.sprite(0,0, "meuf" );
	

		femelle.scale.setTo(0.3,0.3);
		Billy.scale.setTo(0.3,0.3);
		LaTabola.scale.setTo(0.5,0.5);

		// tween = game.add.tween(femelle.scale).to( { x: 0.3, y: 0.3 }, 3000, Phaser.Easing.Elastic.Out, true);
		// twee1 = game.add.tween(Billy.scale).to( { x: 0.3, y: 0.3 }, 3000, Phaser.Easing.Elastic.Out, true);
		
		femelle.animations.add('jump');

		game.physics.enable(Billy, Phaser.Physics.ARCADE);
		game.physics.enable(femelle, Phaser.Physics.ARCADE);
		game.physics.enable(LaTabola, Phaser.Physics.ARCADE);

		
		
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
				if(confirm("TU SUCE")){
					ELLESUCE = true;
					Billy.body.collideWorldBounds = false;
				}
		}

		LaTabola.body.setSize(300,50,100,0);
		LaTabola.body.collideWorldBounds = true;
		LaTabola.body.immovable = true;
		

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
		if(!ELLESUCE)
			game.physics.arcade.collide(femelle, Billy);
		game.physics.arcade.collide(femelle, LaTabola);
	},
	render : function(){
		// game.debug.bodyInfo(Billy, 32, 32);
		// game.debug.body(femelle);
		// game.debug.body(Billy);
		// game.debug.body(LaTabola);

	} 
}
