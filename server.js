require('dotenv').config();

const exporess = require('express');
const exphbr = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbr({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', burger);


app.listen(process.env.PORT || 3360, ()=> {
    console.log('Server running on port: 3360')
});