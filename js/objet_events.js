var tabDialog =
[
{perso : "Bosseur", situation : "coop", phrases :
[{phrase : "Bonjour, est-ce que tu peux m’aider concernant notre projet ? ", coop : "Grâce au travail d’équipe le projet avance bien !",
	betray : "Le Bosseur travaille seul et a plus de mal à rendre son dossier à temps, cela entache tout le projet."},
{phrase : "Est-ce que tu peux aller me chercher un café à la machine, je travaille d’arrache-pied.", coop : "Votre gentillesse est récompensée par une recommandation a votre supérieur, l’ambiance s’améliore.",
	betray : "Le Bosseur est accro au café, sans café il fait du sur-place, le projet en pâtit."},
{phrase : "J’ai un problème concernant ton rapport, il va falloir que tu le refasses.", coop : "Vous vous êtes remis·e en question, cela force l’admiration, le projet avance bien !",
	betray : "Vous avez rendu un rapport plein d’erreurs, vous passez pour un·e incapable."} ]
},
{perso : "Gaffeur", situation : "coop", phrases :[
{phrase : "Je t’ai emprunté ton agrafeuse pour la journée, je te la rends plus tard.", coop : "Le Gaffeur apprécie votre confiance, le projet avance bien !",
	betray : "Vous reprenez votre agrafeuse, le Gaffeur rend un dossier rempli de feuilles volantes, le projet perd en crédibilité."},
{phrase : "Hey, j’ai besoin de ce que tu as écris pour terminer la présentation pour notre réunion avec le boss.", coop : "Votre coopération permet au Gaffeur de briller pendant la présentation, le projet avance.",
	betray : "Le Gaffeur est tellement stressé de na pas finir sa présentation, qu’il transpire à grosse gouttes sur plusieurs feuilles importantes, le projet en prend un coup."},
{phrase : "Je suis à court de trombones, tu peux me dépanner ?", coop : "Grâce à vous, le Gaffeur a pu terminer sa sculpture en trombones, il est heureux et ce n’est déjà pas mal.",
	betray : "Le Gaffeur se sent rejeté par le groupe, et décide de ne pas finir sa journée."} ]
},
{perso : "Gaffeur", situation : "betray", phrases : [
{phrase : "J’ai cassé la photocopieuse, tu peux me couvrir s’il te plait ?", coop : "Cela vous empêche de rendre votre dossier à temps, mais le Gaffeur vous est reconnaissant.",
	betray : "Vous échouez tous les deux, le Gaffeur est émotif et se met à pleurer lorsque le boss le sermone."},
{phrase : "J’ai renversé mon café sur ton ordi, tu ne m’en veux pas hein ?", coop : "Vous devez payer la réparation vous-même, le Gaffeur vous offre une tablette pour se faire pardonner.",
	betray : "Alors que vous étiez en train de le sermoner, le Gaffeur est pris d’une crise de hoquet, il renverse encore son café, mais sur vous cette fois-ci."},
{phrase : "J’ai perdu le dossier pour la présentation, aide-moi à le retrouver !", coop : "Vous aidez le Gaffeur, il réussit avec brillo sa présentation.",
	betray : "Le Gaffeur panique pendant la présentation et vous embarque dans sa chute."} ]
},
{perso : "Susceptible", situation : "coop", phrases : [
{phrase : "J’ai besoin de ton aide concernant notre rapport, pense à te relire.", coop : "Vous vous relisez, les conseils du Susceptible étaient légitimes.",
	betray : "Votre rapport était vraiment mauvais, vous et le Susceptible passez pour des tocards."},
{phrase : "Tu veux qu’on déjeune ensemble ce midi ? J’ai quelques doutes concernant le projet.", coop : "Le Susceptible apprécie votre compagnie, il paye le repas.",
	betray : "Le Susceptible mange seul, dommage lui qui vous donne toujours son dessert."},
{phrase : "Tu n’as pas vu ma pile de post-it ? Ou c’est encore le Gaffeur qui me l'a prise ?", coop : "Vous dénoncez le Gaffeur, le Susceptible vous remercie et vous aide pour votre rapport.",
	betray : "Vous ne dénoncez pas le Gaffeur, mais le Susceptible avait des numéros importants sur ces post-it, il ne peut pas conclure une affaire."} ]
},
{perso : "Susceptible", situation : "coop", phrases : [
{phrase : "Sans rire, ta présentation était bancale, je peux t’aider à t’améliorer si tu veux.", coop : "Le Susceptible essaye de vous déstabiliser, mais vous arrivez à améliorer vos compétences.",
	betray : "Le Susceptible sabote le vidéoprojecteur, votre présentation est encore pire que la précédente."},
{phrase : "J’ai trouvé des fichiers … honteux sur ta clé USB, pense à être plus discret la prochaine fois.", coop : "Il tente de vous faire chanter, vous perdez du temps pour récupérer la clé, le projet prend du retard.",
	betray : "Le Susceptible divulgue les photos, tout l’open space se moque de vous, le projet est saboté."},
{phrase : "J’ai été chercher ta nouvelle chaise bureau et je te l’ai installée, pas la peine de me remercier.", coop : "Le Susceptible a saboté votre chaise, mais vous réussissez à vous en sortir avec classe.",
	betray : "Le Susceptible sabote votre chaise et l’open space entier se paye votre tête."} ]
},
{perso : "Manipulateur", situation : "coop", phrases : [
{phrase : "Apporte-moi le dossier, j’ai un rapport à rendre s’il te plait.", coop : "Vous lui apportez le dossier, le Manipulateur vous remercie pleinement et progresse bien.",
	betray : "Le Manipulateur n’arrive pas à retrouver le dossier, le rapport est inachevé."},
{phrase : "Le Bosseur m’a informé qu’une réunion à lieu cette après-midi, est-ce que tu sais où ?", coop : "Vous accompagnez le Manipulateur à sa réunion, le projet avance.",
	betray : "La Manipulateur se perd dans les bâtiments, il se retrouve au self et décide de manger une salade équilibrée."},
{phrase : "J’ai des problèmes avec mon ordinateur, tu peux venir m’aider ?", coop : "Vous aidez le Manipulateur avec son ordinateur, la source du problème était un Cheval de Troie.",
	betray : "Le Manipulateur se fait déborder par les évènements, il se fait pirater les données du projet"} ]
},
{perso : "Manipulateur", situation : "betray", phrases : [
{phrase : "Avant de partir, n’oublie de mettre à jour ton ordinateur.", coop : "Vous décidez de l’ignorer, votre travail avance bien sans cette « mise à jour ».",
	betray : "Vous écoutez le Manipulateur, c’était un piège, il vous vole votre travail comme un malpropre." },
{phrase : "J’ai remarqué que le Gaffeur a envoyé une chaîne de mail hilarante, jettes-y un œil !", coop : "Vous l’ignorez et décidez de demander directement au Gaffeur, qui vous révèle le mensonge du Manipulateur",
	betray : "La chaîne de mail venait du manipulateur, vous cliquez sur un spam, votre ordinateur est infecté."},
{phrase : "Tiens prends ce bon café, ça va te réchauffer", coop : "Vous attendez que le café se refroidisse avant de le déguster, vous vous sentez reboosté·e.",
	betray : "Vous buvez immédiatement le café du Manipulateur, vous vous brûlez la gorge, vous terminez la journée aux urgences."} ]
}
]


var tabDia = [
"Bonjour, est-ce que tu peux m’aider\n concernant notre projet ? ",
"Je t’ai emprunté ton agrafeuse pour la journée,\n je te la rends plus tard.",
 "J’ai cassé la photocopieuse,\n tu peux me couvrir s’il te plait ?",
  "J’ai besoin de ton aide concernant notre rapport,\n pense à te relire.",
"Sans rire, ta présentation était bancale,\n je peux t’aider à t’améliorer si tu veux.",
"Apporte-moi le dossier,\n j’ai un rapport à rendre\n s’il te plait.",
"J’ai remarqué que le Gaffeur\n a envoyé une chaîne de mail hilarante,\n jettes-y un œil !"
]