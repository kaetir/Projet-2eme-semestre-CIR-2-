require.config({
    baseUrl: './',

});



require(["coups","game","joueur","personnage"],
    function(coups,game,joueur,personnage) {
        Game = new game();
        Game.addJoueur("Billy","Manipulateur");
        Game.addJoueur("Jeanne","Suceptible");
        Game.tabJoueur.forEach( (perso)=>{
            perso.present()
        });
            
});

