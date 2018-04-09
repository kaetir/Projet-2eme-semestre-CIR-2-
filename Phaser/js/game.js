

var leJeu = {


	chemale :{},
	preload : function(){
		chemale = game.add.sprite(0,0, "meuf");
		tween = game.add.tween(chemale.scale).to( { x: 0.5, y: 0.5 }, 3000, Phaser.Easing.Elastic.Out, true);
		
		chemale.animations.add('jump');

		game.physics.enable(chemale, Phaser.Physics.ARCADE);
		chemale.body.allowRotation = false;


	},


	update : function() {
		//  only move when you click
		if (game.input.mousePointer.isDown){
			//  400 is the speed it will move towards the mouse
			game.physics.arcade.moveToPointer(chemale, 400);
			chemale.animations.play('jump', 12, false);

			//  if it's overlapping the mouse, don't move any more
			if (Phaser.Rectangle.contains(chemale.body, game.input.x, game.input.y)){
				chemale.body.velocity.setTo(0, 0);
			}
		}
		else{
			chemale.body.velocity.setTo(0, 0);
		}
	} 
}