const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3001;


const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
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