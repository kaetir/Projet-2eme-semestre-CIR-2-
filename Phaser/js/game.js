

var leJeu = {


	femmelle :{},
	preload : function(){
		femmelle = game.add.sprite(0,0, "meuf");
		tween = game.add.tween(femmelle.scale).to( { x: 0.3, y: 0.3 }, 3000, Phaser.Easing.Elastic.Out, true);
		
		femmelle.animations.add('jump');

		game.physics.enable(femmelle, Phaser.Physics.ARCADE);
		femmelle.body.allowRotation = false;


	},


	update : function() {
		//  only move when you click
		if (game.input.mousePointer.isDown){
			//  100 is the speed it will move towards the mouse
			game.physics.arcade.moveToPointer(femmelle, 100);

			//  if it's overlapping the mouse, don't move any more
			if (Phaser.Rectangle.contains(femmelle.body, game.input.x, game.input.y)){
				femmelle.body.velocity.setTo(0, 0);
			}else{
				femmelle.animations.play('jump', 12, false);
			}
		}
		else{
			femmelle.body.velocity.setTo(0, 0);
		}
	} 
}
