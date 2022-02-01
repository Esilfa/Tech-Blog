const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');

const app = express();