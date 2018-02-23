# Algo de parcour

```javascript 
for (n of nombre de tours)    //Nombre de tours réalisés.
{ 
	for(Personnage1 of equipe)   //Pour tous les personnages de l'équipe
	{ 
		for(Personnage2 of equipe-1)    //Chaque personnage effectue toutes les relations possibles avec les autres membres de l'équipe
		{
			Personnage1.fonction(Personnage2);
		}
	}

}




```

#Principe d'héritage de classe: Equipe<personne<Bosseur

#Classe personne (A faire en urgence: Gérer le résultat de la rencontre entre le joueur et le perso)

```javascript
class personne {

  constructor(type)
  {
  	this.type= type;
  	var IamTheNumber;
  	var Memory[[0,0,0],[0,0,0]];   //La première ligne du tableau correspond au souvenir de l'action du joueur et la deuxième; le résultat de l'échange entre le joueur et le perso. 
  }

  GetType()		//Retourne le type de perso 
  {
  	return this.type;
  }

  Betray(personne)  //La fonction Betray enclenche la création d'un souvenir de l'action du joueur. 
    {
      this.personne.MyMemory[day]=-1;   //Le perso se souvient de votre action.
    }

  Coop(personne)    //De même pour la fonction Coop.
    {
      this.personne.MyMemory[day]=1;
    }	
}


```

# Classe Joueur (Classe fille de personne)

```javascript

class Joueur extends personne{
  constructor(){
    
    var IamTheNumber=0;
    
    var JMemory[[0,0,0],[0,0,0],[0,0,0],[0,0,0]];   //JMemory est un tableau récapitulatif des choix du joueur en fonction des personnages. On pourra l'afficher en fin de partie pour déterminer selon son profil (exemple bosseur, manipulateur,ect)


  }
  

  TalkTo(personne)    //Quand le joueur croise un perso.
   {
      //Afficher les buttons "coop" et "betray"
      
      if(Joueur_Click == Betray)    //Le joueur click sur le boutton "Betray"
      {
       Betray(this.personne);
      }

      if(Joueur_Click == Coop)    //De même avec le bouton "Coop"
      {
       Coop(this.personne);
      }

   }
} 

```

# Classe Bosseur (Classe fille de personne)

```javascript
class Bosseur extends personne{
	
	super.GetType();
	
}
```