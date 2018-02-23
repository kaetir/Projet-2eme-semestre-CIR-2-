# Cahier des charges

## Le bien être au travail
	
#### Début du jeu
- style paper please : présentation de CV
- choix des comportements

#### Déroulement 
- gestion de l'équipe de travail
- evolution des comportements au sein d'une start up
- productivité de l'équipe par le biais de gain de "points d'action" venant des joueurs

##### Liste des personnages du jeu:
- le bosseur --> travail tout le temps, on peut compter sur lui
- le suceptible --> bosse mais s'il rencontre un problème, il sabote la relation
- le gaffeur --> maladroit mais bienveillant
- le manipulateur --> teste des collègues pour en tirer partie
- le jem'enfoutiste --> ne fait rien et se fout de tout
- le random --> aléatoire et imprévisible
- le leader --> travaille beaucoup, esprit de compétition, booste ses collègues, mais sang chaud
- le peureux --> s'attend toujours au pire, suit la majorité et n'exprime pas son avis

#### Fin du jeu 
- barre de satisfaction d'équipe pleine
- productivité de l'équipe satisfaisante

#### Modes

##### Arcade 2 - 3 minutes
- le bosseur --> travail tout le temps, on peut compter sur lui
- le suceptible --> bosse mais s'il rencontre un problème, il sabote la relation
- le gaffeur --> maladroit mais bienveillant
- le manipulateur --> teste des collègues pour en tirer parti
 
##### Story 10 minutes
- le bosseur --> travail tout le temps, on peut compter sur lui
- le suceptible --> bosse mais s'il rencontre un problème, il sabote la relation
- le gaffeur --> maladroit mais bienveillant
- le manipulateur --> teste des collègues pour en tirer parti
- le jem'efoutiste --> ne fait rien et se fout de tout
- le random --> aléatoire et imprévisible
- le leader --> travaille beaucoup, esprit de compétition booste ses collègues, mais sang chaud
- le peureux --> s'attend toujours au pire, suit la majorité et n'exprime pas son avis


## Tableau d'état final

### Mode ARCADE à 4 joueurs

#### Organisation
Le jeu s'organise sur 3 jours de travail. Le joueur doit obtenir assez de points d'action pour compléter 60% de la barre de progrès. Pour récupérer les points d'action, le joueur doit s'adresser aux PNJs nommés précédemment (le bosseur, le suceptible, le gaffeur et le manipulateur), il a le choix entre "COOP" et "BETRAY" à chaque rencontre avec un PNJ. Il peut choisir d'aider le PNJ ou de le trahir. Les actions du joueur ont des répercussions sur la productivité de l'équipe. Cependant, les PNJs peuvent également "COOP" et "BETRAY" le joueur. Il faudra faire avec les décisions de chacun afin d'obtenir assez de points d'action pour gagner. Les points d'action sont visibles dans le "MENU OBJECTIF". On peut y retrouver la liste des personnages et les points d'action disponibles. Sur les 3 jours de travail, le joueur doit parler une fois à chaque personnage. Il ne peut leur adresser la parole qu'une seule fois par jour. Le jour suivant, les PNJs sont de nouveau abordables. Après chaque décision du joueur, une alerte visuelle l'informe des conséquences de son action et distribue un conseil sur le jeu. ATTENTION, les PNJs se souviennent de l'action du jour précédent. Exemple : si le joueur décide de "BETRAY" un PNJ, celui-ci pourra agir en fonction de cette trahison. On se base sur la méthode de réaction suivante :


|	|BOSSEUR|SUCEPTIBLE|GAFFEUR|MANIPULATEUR|
|--|--|--|--|--|
|APRÈS TRICHE_1|COOP|SABOTAGE|?|COOP|
|APRÈS TRICHE_2|COOP|SABOTAGE|?|SABOTAGE|
|APRÈS TRICHE_3|COOP|SABOTAGE|?|SABOTAGE|
|APRÈS COOP_1|COOP|COOP|?|SABOTAGE|
|APRÈS COOP_2|COOP|COOP|?|COOP|
|APRÈS COOP_3|COOP|COOP|?|COOP|

#### Calcul de points

|ACTION JOUEUR|VS|ACTION PNJS|TOTAL|
|--|--|--|--|
|COOP|VS|BETRAY|= +0,5 PTS|
|BETRAY|VS|BETRAY|= -1 PTS|
|COOP|VS|COOP|= +1 PTS|
|BETRAY|VS|BETRAY|= - 0,5 PTS|

















