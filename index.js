require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session  = require('express-session');             
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport 
app.use(session({ secret: process.env.PASSPORT_SEC, resave: true, saveUninitialized: true})); // session secret 
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions


const exphbs = require('express-handlebars');

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