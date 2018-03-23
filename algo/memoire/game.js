define(["personnage"], function(personage){
    class game {
    	constructor(){
    		this.tour = 0;
            this.tabJoueur = [];
    	}
    	tourSuivant(){
    		this.tour++;
    	}
    	addJoueur(nom,type){
    		if(game.prototype.liste_type.some(value => value == type))    {
    			this.tabJoueur.push(new personage(nom,type))
    		}
    	}
    } 
    game.prototype.liste_type = ["Manipulateur", "Suceptible"];

    return game;
});