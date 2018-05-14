

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

		var result = game.Game.scorePerso(game.Game.tabJoueur[4]);
		var score = "Score : " + result + "\n Bravo \n La confiance c'est très important";

		if(result >= 10 )
			score += "\n vous un etes bosseur ";

		if(result <= 6 && result > 10 )
			score += "\n vous etes un manipulateur ";

		if(result <= 3 && result > 6 )
			score += "\n vous etes un gaffeur ";

		if(result < 3 )
			score += "\n vous un etes susceptible ";
		

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