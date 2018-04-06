require.config({
    baseUrl: './',

});



require(["coups","game","joueur","personnage"],
    function(coups,game,joueur,personnage) {
        Game = new game();
        
        Game.addJoueur("Billy","Bosseur");
        Game.addJoueur("Jeanne","Suceptible");
        Game.addJoueur("Ed","Manipulateur");
        //Game.addJoueur("Jackie","Humain");
        Game.tabJoueur.forEach( (perso)=>{ perso.present() });

        console.log('=============================================\ntrade\n=============================================\n');
        
        /*
        Game.tabJoueur[0].trade(Game.tabJoueur[0].donne_for_trade(Game.tabJoueur[0],Game),Game.tabJoueur[1],Game);

        Game.tabJoueur[0].trade(Game.tabJoueur[0].donne_for_trade(Game.tabJoueur[0],Game),Game.tabJoueur[2],Game);
   
        Game.tabJoueur[1].trade(Game.tabJoueur[1].donne_for_trade(Game.tabJoueur[1],Game),Game.tabJoueur[2],Game);
        Game.tabJoueur[1].trade(Game.tabJoueur[1].donne_for_trade(Game.tabJoueur[1],Game),Game.tabJoueur[2],Game);
        Game.tabJoueur[1].trade(Game.tabJoueur[1].donne_for_trade(Game.tabJoueur[1],Game),Game.tabJoueur[2],Game);
        //Game.tabJoueur.forEach( (perso)=>{ perso.full() });
        
        Game.tabJoueur[0].trade(Game.tabJoueur[0].donne_for_trade(Game.tabJoueur[0],Game),Game.tabJoueur[1],Game);
        */     

        Game.autoTrade();
        Game.autoTrade();
        Game.autoTrade();

        Game.tabJoueur.forEach( (perso)=>{ perso.full() });






});

