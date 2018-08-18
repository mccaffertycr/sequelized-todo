var express = require('express');              
var bodyParser = require('body-parser');
var db = require('./models');
var path = require('path');
           require('dotenv').config();

var app = express();
var PORT = process.env.DB_HOSTNAME || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');


require('./routes/apiRoutes')(app);
require('./routes/views')(app);


db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT,() => {
      console.log("App listening on PORT " + PORT);
    });
})