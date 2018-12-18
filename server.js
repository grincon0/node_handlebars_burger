require('dotenv').config();

const express = require('express');
const exphbr = require('express-handlebars');
const path = require('path');
const burger = require('./controllers/burger_controller');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbr({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', burger);


app.listen(PORT, function (){
    console.log(`App listening on PORT:${PORT}`);

});
