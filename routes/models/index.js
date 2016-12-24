const models = require('express').Router();
const users = require('./users');

models.get('/', users);
module.exports = models;
