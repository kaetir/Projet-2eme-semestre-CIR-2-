var Tab = [
	["Bosseur","Suceptible","Gaffeur","Manipulateur"],
	["n-1","(n-1)-t","(n-1)-random(n-1)","(n-1)+choix"],
]

var Tab2 = [
	["BOSSEUR","SUCEPTIBLE","GAFFEUR","MANIPULATEUR","OSEF","RANDOM","LEADER","PEUREUX"],
	["n-1","(n-1)-t","(n-1)-random(n-1)","(n-1)+choix","0","random(n-1)","(n-1)+Pts bonus","(n-1)-somme/n-1"],
]

var TabRelation = [
	["", "BOSSEUR",	"SUCEPTIBLE",	"GAFFEUR",	"OSEF",	"RANDOM",	"MANIPULATEUR",	"LEADER",	"PEUREUX"],
	["BOSSEUR",	1,	1,	1,	0,	0,	1,	1,	1,],
	["SUCEPTIBLE",	1,	0,	-1,	-1,	-1,	-1,	1,	0,],
	["GAFFEUR",	1,	-1,	-1,	-1,	0,	1,	1,	1,],
	["OSEF",	0,	-1,	-1,	-1,	-1,	-1,	-1,	-1,],
	["RANDOM",	0,	-1,	0,	-1,	0,	0,	1,	0,],
	["MANIPULATEUR",	1,	-1,	1,	-1,	0,	0,	1,	1,],
	["LEADER",	1,	1,	1,	-1,	1,	1,	-1,	1,],
	["PEUREUX",	1,	0,	1,	-1,	0,	1,	1,	-1,]


]