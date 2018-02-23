# Algo de parcour

```javascript 
for (n of nombre de tours)//Nombre de tours réalisés.
{ 
	for(Personnage1 of equipe)//Pour tous les personnages de l'équipe
	{ 
		for(Personnage2 of equipe-1)//Chaque personnage effectue toutes les relations possibles avec les autres membres de l'équipe
		{
			Personnage1.fonction(Personnage2);
		}
	}

}




```

#Principe de classe: Equipe<personne<Bosseur

# Classe personne (A faire en urgence: Gérer le résultat de la rencontre entre le joueur et le perso)

```javascript
class personne {

  constructor(type)
  {
  	this.type= type;
  	var IamTheNumber;
  	var Memory[[0,0,0],[0,0,0]];	//Le premier
  }

  GetType()		//Retourne le type de perso 
  {
  	return this.type;
  }

  TalkTo(personne)		//Quand le joueur croise un perso.
  {
  	//Afficher les buttons "coop" et "betray"
  

  	Betray(personne)	//Fonction à déclencher si le joueur à appuyer sur le boutton Betray. 
  	{
  		this.personne.MyMemory[day]=-1;		//Le perso se souvient de votre action.
  	}

  	Coop(personne)		//De même pour le bouton coop.
  	{
  		this.personne.MyMemory[day]=1;
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