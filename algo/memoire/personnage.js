define(["coups","game"], function(coup,game){
    class Personnage {
    	static this.nbJoueur = 0;
    	constructor(nom,type){
    		this.type = type; 			//string
    		if(type == "Suceptible"){
    			this.TRIGERED = [];
    			this.I_AM_TRIGERED = function(&perso){
    				this.TRIGERED.push(this.id);
    			}
    		}
    		this.nom = nom;				//string
    		this.id = this.nbJoueur;	//int
    		this.nbJoueur++;			//int
    		this.memoire = [];			//tableau de coups

    	}
    	
    	/*
    	description :
    	argument :
    	return :
    	 */
    	
    	trade(donnee, recu, &perso){
    		if(perso.id != this.id){
    			this.memoire.push(coup(donnee,recu,perso.id, game.tour));
    			perso.memoire.push(coup(recu,perso.donne_for_trade,this.id, game.tour))
    		}
    	}

    	
    	memoire_is_empty(){
    		return (this.memoire == []);
    	}




    	donne_for_trade($perso){

    		switch (this.type) {
    		 	
    		 	case "Manipulateur":
    		 		if(game.tour > 1){
    		 			var last_turn = this.memoire.filter(coup=>coup.tour == game.tour-1)
    		 			if(game.tour > 2){
    		 				var last_last_turn = this.memoire.filter(coup=>coup.tour == game.tour-2)
    		 			}
    		 		}
    		 		
    		 		if(this.memoire_is_empty == true){
    				return true;
    				}
    				else{
    					if(game.tour = 2){
    					return false;
    				}
    				else{
    					if(last_turn == true && last_last_turn == true){
    						return false;
    					}
    					else{
    						return true;
    					}
    				}
    				}
    		 		break;
    		 		
    		 	case "Suceptible":
    		 		if(memoire_is_empty == true){
    					return true;
    				}
    				else{
    					if(TRIGERED.includes(this.id)){
    						return false;
    					}
    					else{
    						return true;
    					}
    				}
    		
    		 		break;
    		 		
    		 	case "Bosseur":
    		 		return true;

    		 		break;

    		 	case "Gaffeur":
    		 		return (int(Math.random()*100)>33);  //33 est le % de chances d'echec

    		 		break;
    		 	default:
    		 		console.log('ERREUR DE TYPE')
    		 		break;
    		 }
    	}


    } 

    return Personnage;
});