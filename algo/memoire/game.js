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
    		if(liste_perso.include(type)){
    			tabJoueur.append(personage(nom,type))
    		}
    	}
    } 

    return game;
});