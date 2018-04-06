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
          if(game.prototype.liste_type.includes(type))    {
             this.tabJoueur.push(new personage(nom,type))
         }
     }
     autoTrade(){
        for(let i in this.tabJoueur){
            for(let j in this.tabJoueur){
                if(this.tabJoueur[i].human == true){
                    this.tabJoueur[i].trade(confirm("coop ?"),Game.tabJoueur[2],Game); 
                }else{
                    this.tabJoueur[i].trade(Game.tabJoueur[i].donne_for_trade(Game.tabJoueur[i],Game),Game.tabJoueur[j],Game);
                }
            }
        }
        this.tourSuivant();

    }
} 
game.prototype.liste_type = ["Manipulateur", "Suceptible","Bosseur", "Gaffeur", "Humain"];

return game;
});