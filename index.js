require('dotenv').config();
const express = require('express');              
const bodyParser = require('body-parser');
const path = require('path');
var env = process.env.NODE_ENV || 'development';
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');


require('./routes/apiRoutes')(app);
require('./routes/views')(app);

var syncOptions = { force: false };

if(env === 'test' || 'development') {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
    app.listen(PORT,() => {
      console.log("App listening on PORT " + PORT);
    });
})