require.config({
    // Par défaut, aller chercher les modules dans le dossier js/
    baseUrl: 'js',
    // Définition des raccourcis
    paths: {
        jquery:     'libs/jquery',
        Handlebars: 'libs/handlebars'
    },
    // Encapsulation des bibliothèques externes dans des modules
    shim: {
        jquery: {
            exports: '$'
        },
        handlebars:{
            exports: 'Handlebars'
        }


    }
});
