var express = require('express');              
var bodyParser = require('body-parser');
var path = require('path');
           require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var controller = require('./controllers/todo_controller');

app.use('/', controller);


app.listen(PORT, () => {
    console.log('listening on: http://localhost:' + PORT);
});