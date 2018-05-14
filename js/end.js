

var end = {

	text : {},

	create : function(){
		game.add.tileSprite(0, 0, 1152, 648, 'background'); 
		
		for(let i of game.Game.tabJoueur){
			for(let j of game.Game.tabJoueur){
				if(i != j){
					game.Game.score(i,j);
				}
			}	
			console.log(i.id);
		}

		var score = "Score : " + game.Game.scorePerso(game.Game.tabJoueur[4]) + "\n Bravo \n La confiance c'est très important";

		text = game.add.text(game.world.centerX/2, game.world.centerY-50, score, { font: "bold 32px Arial", fill: "#e54a3b", align : "center" });
    	text.anchor.set(0.5,0.5);

    	game.time.events.add(Phaser.Timer.SECOND * 5, ()=>{
			game.state.add('main_menu', main_menu);
			game.state.start('main_menu');
		}, this);

	},

	update : function(){
		
	}

}