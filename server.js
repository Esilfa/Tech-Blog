const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;




const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Pink Sky',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.engine("handlebars", hbs.engine);

app.set('view engine', 'handlebars');

//   add app use
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(  '/Public', express.static(path.join(__dirname, "Public") ));



app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server is running'));
});