Version Node 18.10.0 minimum nécessaire

Installation de l'app :
Dans le terminal, dans le dossier racine du projet, lancer la commande : npm install
npm i nodemon -g

Lancer l'app en local :
Dans le terminal, dans le dossier vintool/, lancer la commande n: npm run start


Pour créer une page :

- Dans le dossier views, créer un fichier nomDeLaPAge.ejs (On mettra le HTML dedans)

- Au début de chaque fichier nomDeLaPAge.ejs, mettre en première ligne <%- include('template/header') %>
  et <%- include('template/footer') %> en dernière ligne
  Cela importera automatiquement le header et le footer avec les feuilles de style et les scripts liés à chaque page

  On met le HTML entre les deux includes

- Dans public/css, créer un dossier qui porte le nom de la page et dans celui-ci créer un fichier style.css

- Dans public/js, créer un dossier qui porte le nom de la page et dans celui-ci créer un fichier script.js


Pour créer une route :

Dans app.js on ajoute la ligne

app.get('/route', function (req, res) {
    res.render('nomDeLaPage***', {
        title: 'titreDeLaPage',
        pageName: "nomDeLaPage",
    })
})

*** Le nom doit correspondre au nom des dossiers créés dans public/css et public/js


