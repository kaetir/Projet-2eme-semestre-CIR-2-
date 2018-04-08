define(["personnage"], function(personage){
	class game {
		constructor(){
			this.tour = 0;
			this.tabJoueur = [];
		}
		/*
		description : passe au tour suivant
		argument : none
		return : none
		*/	
		tourSuivant(){
			this.tour++;
		}
		/*
		description : ajoute un joueur a la partie
		argument : string : nom du nouveau joueur, string :  type du perso (prendre dans la liste en bas de la classe)
		return : none
		*/
		addJoueur(nom,type){
			if(game.prototype.liste_type.includes(type))    {
				this.tabJoueur.push(new personage(nom,type))
			}
		}

		/*
		description : fait jouer un tour a tout les joueurs (hummain compris)
		argument : none
		return : none
		*/
		autoTrade(){
			for(let i in this.tabJoueur){
				for(let j in this.tabJoueur){
					if(this.tabJoueur[i].human == true){
						this.tabJoueur[i].trade(confirm("coop ?"),Game.tabJoueur[j],Game); 
					}else if(i !=j ){
						this.tabJoueur[i].trade(Game.tabJoueur[i].donne_for_trade(Game.tabJoueur[j],Game),Game.tabJoueur[j],Game);
					}
				}
			}
			this.tourSuivant();
		}
		/*
		description : calcul le score d'une partie en fonction du nombre de trande entre deux personnages
		argument : personnage 1, personnage 2
		return : le score du joueur 1 sur le joueur 2
		*/
		score(perso1, perso2){
			var scoreJ12 = perso1.memoire.filter(trade => trade.id == perso2.id ).map(trade => {
				if(trade.recu == true && trade.donnee == true){
					return 2;
				} 
				else if(trade.recu == false && trade.donnee == false){
					return 0;
				}
				else if(trade.recu == true && trade.donnee == false){
					return 3;
				}
				else if(trade.recu == false && trade.donnee == true){
					return -1;
				}
			}).reduce((val,accu) => { return accu+val ;},  0);
			console.log(perso1.nom + ' a un score avec ' +perso2.nom + " de " + scoreJ12);
			return scoreJ12;
		}

	} 
	game.prototype.liste_type = ["Manipulateur", "Suceptible","Bosseur", "Gaffeur", "Humain"];

	return game;
});