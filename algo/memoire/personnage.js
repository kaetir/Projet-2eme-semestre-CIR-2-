define(["coups","game"], function(coup,game){
	class Personnage {


		constructor(nom,type){

			this.type = type; 			//string
			if(type == "Humain"){
				this.human = true;
			}

			if(type == "Suceptible"){

				this.TRIGERED = [];/*Tableau récapitulatif des persos qui ont l'on BETRAY*/

				/*
				description : Fonction qui push l'id d'un perso dans le tableau TRIGERED.
				argument : pointeur sur perso.
				return :NADA
				*/

				this.I_AM_TRIGERED = function(perso){
					this.TRIGERED.push(perso.id);
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
		history(){
			console.log(this.memoire);
		}
		full(){
			this.present()
			this.history()
		}


		/*
		description : Affectation mémoire du coup donnée et reçu.
		argument : donne, recu, et un personnage.
		return : NADA
		*/

		trade(donnee , perso, game){
		//console.log(this);
		//console.log(perso);
		//console.log("==============");
		if(!this.memoire.some((elemt)=>{return (elemt.id == perso.id && elemt.tour == game.tour)}) && this.id != perso.id){
			//console.log(this.nom+ ' trade avec ' + perso.nom);
			//console.log("==============");
			if(perso.id != this.id){
				var recu = perso.donne_for_trade(this,game);
				this.memoire.push(new coup(donnee,recu,perso.id, game.tour));
				perso.memoire.push(new coup(recu,donnee,this.id, game.tour))
				if(this.type == "Suceptible" && recu == false ){
					if(!this.TRIGERED.includes(perso.id))
						this.I_AM_TRIGERED(perso);
				}
				if(perso.type == "Suceptible" && donnee == false ){
					if(!perso.TRIGERED.includes(this.id))
						perso.I_AM_TRIGERED(this);
				}

			}
		}
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
	donne_for_trade(perso,game){
		switch (this.type) {

			case "Manipulateur":{ 

				/*Liste d'échanges: COOP >> BETRAY >> ADAPTATION*/

				/*Affectation des variables last_turn et last_last_turn selon le tour en cour.*/


				if(game.tour == 0){
					/*Premier échange avec l'individu.*/
					return true;
				}

				if(game.tour == 1){
					/*Deuxième échange avec l'individu.*/
					return false;
				}	

				var last_turn = this.memoire.filter(coup=>coup.tour == game.tour-1	).filter(coup => coup.id == perso.id)[0]["recu"];
				var last_last_turn = this.memoire.filter(coup=>coup.tour == game.tour-2).filter(coup => coup.id == perso.id)[0]["recu"];

				/*Après le deuxième tour, le manipulateur fait des choix adaptatifs.*/
				return last_turn && last_last_turn;

				break;
			}
			case "Suceptible":{
				/*Liste d'échanges: COOP >> ADAPTATION >> ADAPTATION*/

				/*Premier échange de l'individu.*/
				if(this.memoire_is_empty() == true){
					return true;
				}

				/*Reste des échanges avec l'individu.*/
				else if(this.TRIGERED.includes(perso.id)){/*On teste si l'id du perso se trouve dans le tableau TRIGERED*/
				//console.log(this.nom + " nike la mere de " + perso.nom);
			return false;
		}
		else{
			return true;
		}

		break;
	}
	case "Bosseur":{

		/*Liste d'échanges: COOP >> COOP >> COOP*/

		return true;

		break;
	}
	case "Gaffeur":{
		/*Liste d'échanges: RANDOM >> RANDOM >> RANDOM*/
		return (parseInt(Math.random()*100)>33);  //33 est le % de chances d'echec

		break;
	}

	default: {/*Si on a un type autre que ceux précédement on renvoie en console un message d'erreur.*/
	console.log('ERREUR DE TYPE')
	break;
}
}


} 
}

Personnage.prototype.nbJoueur = 0;

return Personnage;
});