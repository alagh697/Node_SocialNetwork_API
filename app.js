const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//chargement des routes dans le routeur
const router = require('./src/Routes/routes');

const app = express();
const port = 3000;

//Connexion base mongoDB via odm(orm) mongoose
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/Node_SN', { useNewUrlParser: true }, () => {
    console.log('Mongo connected successfuly');
});


//Utilisation de body-parser les request en JSON 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const message = 'Express is running on port ' + port;

//on fait passer l'application dans la methode routes
router.routes(app);

//gestion app express
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.send(message);
});

app.listen(port, () =>{
    console.log(message);
});