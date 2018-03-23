require.config({
    // Par défaut, aller chercher les modules dans le dossier js/
    baseUrl: './',
    // Définition des raccourcis
    paths: {
    },
    // Encapsulation des bibliothèques externes dans des modules
    shim: {}

    }
});



require(["coups","game","joueur","personnage"],
    function(coups,game,joueur,personnage) {
        Game = new game();



});

