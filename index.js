const express = require('express')
const app = express()

const path = require('path')

// Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Routes + render
app.get('/', function (req, res) {
    res.render('home', {
        title: 'Opiff',
        pageName: "home",
    })
})

app.get('/blog', function (req, res) {
    res.render('blog', {
        title: 'Opiff | Blog',
        pageName: "blog",
    })
})

// Error 404
app.use((req, res) => {
    res.status(404)
    res.json('Error 404')
})

// Error 500
// app.use((err, req, res, next) => {
//     res.status(500)
//     res.render('error500', {
//         title: 'Erreur 500 - Erreur interne du serveur',
//         pageName: "error500",
//     })
// })

app.listen(3000, () => {
    console.log(`App lancée sur http://localhost:3000`);
})

