define(["coups","game"], function(coup,game){
    class Personnage {


        constructor(nom,type){
    		
            this.type = type; 			//string
    		
            if(type == "Suceptible"){
    			
                this.TRIGERED = [""];/*Tableau récapitulatif des persos qui ont l'on BETRAY*/
    			
                /*
                description : Fonction qui push l'id d'un perso dans le tableau TRIGERED.
                argument : pointeur sur perso.
                return :NADA
                */

                this.I_AM_TRIGERED = function(perso){
    				this.TRIGERED.push(this.id);
    			}
    		}
    		this.nom = nom;				//string
    		this.id = Personnage.prototype.nbJoueur;	//int
    		Personnage.prototype.nbJoueur++;			//int
    		this.memoire = [];			//tableau de coups

    	}
    	
        present(){
            if(this.type != "Suceptible"){
                console.log('Bonjour je suis '+ this.nom + " id:"+this.id)        
            }else{
                console.log('Bonjour je suis '+ this.nom + " id:"+this.id + " trigger :" + this.TRIGERED)        
            }
        }


    	/*
    	description : Affectation mémoire du coup donnée et reçu.
    	argument : donne, recu, et un personnage.
    	return :NADA
    	 */
    	
    	trade(donnee, recu, perso, game){
    		if(perso.id != this.id){
    			this.memoire.push(coup(donnee,recu,perso.id, game.tour));
    			perso.memoire.push(coup(recu,perso.donne_for_trade,this.id, game.tour))
    		}
            console.log('')
    	}

        /*
        description : Fonction test, mémoire vide ou non.
        argument : nada
        return :Bool true = mémoire vide OU false = mémoire utilisé.
         */
    	
    	memoire_is_empty(){
    		return (this.memoire == []);
    	}

        /*
        description : Algo d'échange entre 2 personnages.
        argument : Pointeur sur le type du perso.
        return : Bool true ou false selon les persos.
         */


    	donne_for_trade(perso){

    		switch (this.type) {

    		 	case "Manipulateur":

                    /*Liste d'échanges: COOP >> BETRAY >> ADAPTATION*/

                    /*Affectation des variables last_turn et last_last_turn selon le tour en cour.*/

    		 		if(game.tour > 1){
    		 			var last_turn = this.memoire.filter(coup=>coup.tour == game.tour-1)
    		 			if(game.tour > 2){
    		 				var last_last_turn = this.memoire.filter(coup=>coup.tour == game.tour-2)
    		 			}
    		 		}
    		 		
                    /*Premier échange avec l'individu.*/
    		 		
                    if(this.memoire_is_empty == true){
    				return true;
    				}
    				else{
    					if(game.tour = 2){/*Deuxième échange avec l'individu.*/
    					return false;
    				}

                    /*Après le deuxième tour, le manipulateur fait des choix adaptatifs.*/

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

                /*Liste d'échanges: COOP >> ADAPTATION >> ADAPTATION*/

                    /*Premier échange avec l'individu.*/

    		 		if(memoire_is_empty == true){
    					return true;
    				}

                    /*Reste des échanges avec l'individu.*/

    				else{
    					if(TRIGERED.includes(this.id)){/*On teste si l'id du perso se trouve dans le tableau TRIGERED*/
    						return false;
    					}
    					else{
    						return true;
    					}
    				}
    		
    		 		break;
    		 		
    		 	case "Bosseur":

                    /*Liste d'échanges: COOP >> COOP >> COOP*/

    		 		return true;

    		 		break;

    		 	case "Gaffeur":

                    /*Liste d'échanges: RANDOM >> RANDOM >> RANDOM*/

    		 		return (int(Math.random()*100)>33);  //33 est le % de chances d'echec

    		 		break;
    		 	


                default:/*Si on a un type autre que ceux précédement on renvoie en console un message d'erreur.*/
    		 		console.log('ERREUR DE TYPE')
    		 		break;
    		 }
    	}


    } 

    Personnage.prototype.nbJoueur = 0;

    return Personnage;
});